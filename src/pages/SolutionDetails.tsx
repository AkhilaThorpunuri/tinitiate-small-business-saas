import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCircle2, CircleHelp, Lightbulb, Target, Workflow } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import * as Icons from 'lucide-react'
import { getBusiness, getSolution } from '../data/solutions'

export default function SolutionDetails() {
  const { businessId, solutionId } = useParams()
  const business = getBusiness(businessId)
  const solution = getSolution(businessId, solutionId)
  if (!business || !solution) return <main className="not-found container"><h1>Solution not found</h1><Link to="/">Return home</Link></main>
  const Icon = (Icons as any)[solution.icon] || Icons.Lightbulb
  return (
    <main>
      <section className="detail-hero">
        <div className="container">
          <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to={`/business/${business.id}`}>{business.name}</Link><span>/</span><span>{solution.title}</span></div>
          <Link to={`/business/${business.id}`} className="back-link"><ArrowLeft size={15} /> All {business.name} solutions</Link>
          <div className="detail-hero-layout">
            <div className="detail-hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> PROPOSED SOLUTION · {business.name.toUpperCase()}</span><h1>{solution.title}<br /><span>made simpler.</span></h1><p>{solution.short}</p><a className="button button-primary" href={`mailto:hello@tinitiate.com?subject=${encodeURIComponent(`Enquiry: ${solution.title}`)}&body=${encodeURIComponent(`Hello TINITIATE AI,\n\nI would like to know more about ${solution.title} for my ${business.name} business.\n\nPlease contact me with more details.`)}`}>Discuss this solution <ArrowUpRight size={17} /></a></div>
            <div className="detail-icon-stage"><div className="detail-icon-orbit" /><div className="detail-icon-box"><Icon size={53} strokeWidth={1.4} /></div><span>BUSINESS SOLUTION</span></div>
          </div>
        </div>
      </section>
      <section className="section detail-content">
        <div className="container">
          <div className="detail-intro-grid">
            <div><span className="eyebrow"><span className="eyebrow-line" /> UNDERSTANDING THE CHALLENGE</span><h2>The problem<br />we want to <span>solve.</span></h2></div>
            <div className="problem-panel"><div className="panel-label"><CircleHelp size={17} /> THE BUSINESS CHALLENGE</div><p>{solution.problem}</p><ul>{solution.challenges.map((item) => <li key={item}><span className="problem-bullet" />{item}</li>)}</ul></div>
          </div>
          <div className="proposed-panel">
            <div className="proposed-heading"><div className="proposed-icon"><Lightbulb size={23} /></div><div><span className="eyebrow">THE TINITIATE AI APPROACH</span><h2>Our proposed <span>solution.</span></h2></div></div>
            <p className="proposed-overview">{solution.overview}</p>
            <div className="feature-grid">{solution.features.map((feature, index) => <div className="feature-item" key={feature}><span className="feature-check"><Check size={15} /></span><span>{feature}</span><small>0{index + 1}</small></div>)}</div>
          </div>
          <div className="detail-lower-grid">
            <div className="lower-panel"><div className="panel-label"><Workflow size={17} /> HOW IT WORKS</div><h3>A simple workflow.</h3><div className="workflow-list">{solution.workflow.map((step, index) => <div className="workflow-step" key={step}><span>{String(index + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</div></div>
            <div className="lower-panel benefits-panel"><div className="panel-label"><Target size={17} /> EXPECTED BUSINESS VALUE</div><h3>What this helps you achieve.</h3><ul>{solution.benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={17} />{benefit}</li>)}</ul><div className="benefit-note">The exact implementation can be tailored to your business process and existing tools.</div></div>
          </div>
          <div className="detail-cta"><div><span className="eyebrow">READY TO TAKE THE NEXT STEP?</span><h2>Let's build a better<br /><span>way to work.</span></h2><p>Share your requirements with TINITIATE AI and let's discuss the right implementation for your business.</p></div><a className="button button-primary" href={`mailto:hello@tinitiate.com?subject=${encodeURIComponent(`Let's discuss ${solution.title}`)}`}>Start a conversation <ArrowUpRight size={17} /></a></div>
          <div className="next-solution"><Link to={`/business/${business.id}`}><ArrowLeft size={16} /> Back to {business.name} solutions</Link><Link to={`/business/${business.id}/${business.solutions[(business.solutions.findIndex((item) => item.id === solution.id) + 1) % business.solutions.length].id}`}>Explore another solution <ArrowRight size={16} /></Link></div>
        </div>
      </section>
    </main>
  )
}
