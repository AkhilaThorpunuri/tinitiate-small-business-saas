import { ArrowUpRight, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <img className="footer-logo" src="/tinitiate-logo.png" alt="TINITIATE AI" />
          <p>Practical digital solutions that help small businesses work smarter and grow with confidence.</p>
        </div>
        <div className="footer-links">
          <span className="eyebrow">EXPLORE</span>
          <Link to="/">Home</Link>
          <a href="/#businesses">Business categories</a>
          <a href="mailto:hello@tinitiate.com">Contact</a>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">LET'S TALK</span>
          <a href="mailto:hello@tinitiate.com"><Mail size={16} /> hello@tinitiate.com <ArrowUpRight size={14} /></a>
          <span className="muted">Tell us about your business and the challenges you want to solve.</span>
        </div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} TINITIATE AI. All rights reserved.</span><span>Built for small business growth.</span></div>
    </footer>
  )
}
