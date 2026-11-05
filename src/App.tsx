import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BusinessSolutions from './pages/BusinessSolutions'
import SolutionDetails from './pages/SolutionDetails'

export default function App() {
  return <div className="app-shell"><Header /><Routes><Route path="/" element={<Home />} /><Route path="/business/:businessId" element={<BusinessSolutions />} /><Route path="/business/:businessId/:solutionId" element={<SolutionDetails />} /><Route path="*" element={<main className="not-found container"><h1>Page not found</h1><a href="/">Return home</a></main>} /></Routes><Footer /></div>
}
