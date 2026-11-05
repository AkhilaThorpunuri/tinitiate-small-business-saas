import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Layers3, Sparkles, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'
import { businesses } from '../data/solutions'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="pill"><span className="pulse-dot" /> SMALL BUSINESS SAAS SOLUTIONS</div>
            <h1>Make your business<br /><span>work smarter.</span></h1>
            <p className="hero-lead">One partner. Practical solutions. Better business operations.</p>
            <p className="hero-description">TINITIATE AI helps supermarkets, online apparel stores and food businesses simplify everyday operations with connected digital solutions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#businesses">Explore business solutions <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#how-it-works">See how it works <ArrowDown size={16} /></a>
            </div>
            <div className="hero-proof"><CheckCircle2 size={16} /><span>Designed around the real challenges of growing businesses</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-center"><img src="/tinitiate-logo.png" alt="TINITIATE AI" /><span>BUSINESS SOLUTIONS</span></div>
            <div className="float-card float-top"><span className="float-icon lime-bg"><Layers3 size={17} /></span><span><b>Connected workflows</b><small>Less manual work</small></span></div>
            <div className="float-card float-bottom"><span className="float-icon purple-bg"><Workflow size={17} /></span><span><b>Built for your business</b><small>Solutions that fit</small></span></div>
            <div className="visual-spark spark-a">✳</div><div className="visual-spark spark-b">✳</div>
          </div>
        </div>
        <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><div className="scroll-line" /><span>01 / 03</span></div>
      </section>

      <section className="section businesses-section" id="businesses">
        <div className="container">
          <div className="section-heading">
            <div><span className="eyebrow"><span className="eyebrow-line" /> OUR BUSINESS SOLUTIONS</span><h2>What kind of business<br />do you <span>run?</span></h2></div>
            <p>Choose your business to explore the challenges we address and the solutions TINITIATE AI can provide.</p>
          </div>
          <div className="business-grid">{businesses.map((business, index) => <BusinessCard key={business.id} business={business} index={index} />)}</div>
        </div>
      </section>

      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow"><span className="eyebrow-line" /> A CLEAR PATH FORWARD</span>
            <h2>From business challenge<br />to <span>practical solution.</span></h2>
            <p>Find the area you want to improve. We make it easy to understand the solution and the value it can bring.</p>
          </div>
          <div className="process-grid">
            <div className="process-item"><span className="process-no">01</span><div className="process-icon"><Layers3 /></div><h3>Choose your business</h3><p>Start with supermarket, online apparel or online food business.</p></div>
            <div className="process-connector"><ArrowRight /></div>
            <div className="process-item"><span className="process-no">02</span><div className="process-icon"><Sparkles /></div><h3>Explore your challenge</h3><p>Browse the operational areas and select a challenge you want to solve.</p></div>
            <div className="process-connector"><ArrowRight /></div>
            <div className="process-item"><span className="process-no">03</span><div className="process-icon"><CheckCircle2 /></div><h3>See the solution</h3><p>Understand proposed features, workflows and expected business benefits.</p></div>
          </div>
          <div className="process-cta"><div><b>Have a business challenge in mind?</b><span>Let's discuss how TINITIATE AI can help.</span></div><a className="button button-primary" href="mailto:hello@tinitiate.com">Talk to our team <ArrowUpRight size={17} /></a></div>
        </div>
      </section>
    </>
  )
}
