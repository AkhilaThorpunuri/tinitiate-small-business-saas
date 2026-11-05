import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link to="/" className="brand" aria-label="TINITIATE AI home" onClick={() => setOpen(false)}>
          <img src="/tinitiate-logo.png" alt="TINITIATE AI" />
        </Link>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <a href="/#businesses" onClick={() => setOpen(false)}>Business solutions</a>
          <a href="/#how-it-works" onClick={() => setOpen(false)}>How it works</a>
          <a className="nav-cta" href="mailto:hello@tinitiate.com" onClick={() => setOpen(false)}>Talk to our team <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  )
}
