import { ArrowLeft, ArrowUpRight, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { getBusiness } from '../data/solutions'

export default function BusinessSolutions() {
  const { businessId } = useParams()
  const business = getBusiness(businessId)
  const [query, setQuery] = useState('')
  const solutions = useMemo(() => business?.solutions.filter((solution) => `${solution.title} ${solution.short}`.toLowerCase().includes(query.toLowerCase())) || [], [business, query])
  if (!business) return <main className="not-found container"><h1>Business not found</h1><Link to="/">Return home</Link></main>
  const Icon = (Icons as any)[business.icon] || Icons.Store
  return (
    <main>
      <section className={`business-hero ${business.accent}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(7,10,17,.97) 0%, rgba(7,10,17,.83) 53%, rgba(7,10,17,.34) 100%), url(${business.image})` }}>
        <div className="container business-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={15} /> All businesses</Link>
          <div className="business-hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> {business.eyebrow.toUpperCase()}</span><div className="business-title-icon"><Icon size={25} /></div><h1>{business.name}<br /><span>solutions.</span></h1><p>{business.description}</p></div>
          <div className="business-hero-meta"><span>{String(business.solutions.length).padStart(2, '0')} SOLUTION AREAS</span><span>BUILT AROUND YOUR OPERATIONS</span></div>
        </div>
      </section>
      <section className="section solution-list-section">
        <div className="container">
          <div className="section-heading solution-heading"><div><span className="eyebrow"><span className="eyebrow-line" /> EXPLORE SOLUTIONS</span><h2>What would you like<br />to <span>improve?</span></h2></div><div className="search-box"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search solutions..." aria-label="Search solutions" /></div></div>
          <div className="solution-grid">
            {solutions.map((solution, index) => {
              const SolutionIcon = (Icons as any)[solution.icon] || Icons.Sparkles
              return <Link key={solution.id} to={`/business/${business.id}/${solution.id}`} className="solution-card">
                <div className="solution-card-top"><span className="solution-index">0{index + 1}</span><span className="solution-icon"><SolutionIcon size={21} /></span></div>
                <h3>{solution.title}</h3><p>{solution.short}</p><span className="solution-card-link">Explore this solution <ArrowUpRight size={16} /></span>
              </Link>
            })}
          </div>
          {solutions.length === 0 && <div className="empty-state">No solutions match “{query}”. Try another search.</div>}
          <div className="help-strip"><div><b>Not sure which solution is right?</b><span>Tell us what is slowing your business down. We can help identify a starting point.</span></div><a href="mailto:hello@tinitiate.com">Talk to TINITIATE AI <ArrowUpRight size={16} /></a></div>
        </div>
      </section>
    </main>
  )
}
