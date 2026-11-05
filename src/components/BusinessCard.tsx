import { ArrowUpRight, Boxes, Shirt, ShoppingBasket, Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Business } from '../data/solutions'

const icons = { ShoppingBasket, Shirt, Utensils, Boxes }

export default function BusinessCard({ business, index }: { business: Business; index: number }) {
  const Icon = icons[business.icon as keyof typeof icons] || Boxes
  return (
    <Link to={`/business/${business.id}`} className={`business-card ${business.accent}`}>
      <div className="business-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(5,8,14,.02), rgba(5,8,14,.66)), url(${business.image})` }}>
        <span className="card-number">0{index + 1}</span>
        <span className="business-icon"><Icon size={21} /></span>
      </div>
      <div className="business-card-content">
        <span className="eyebrow">{business.eyebrow}</span>
        <h3>{business.name}</h3>
        <p>{business.description}</p>
        <span className="card-link">Explore solutions <ArrowUpRight size={17} /></span>
      </div>
    </Link>
  )
}
