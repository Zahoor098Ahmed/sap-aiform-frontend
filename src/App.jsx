import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import FeedbackForm from './components/FeedbackForm'
import AdminRoute from './components/AdminRoute'

function App() {

  // SEO optimization
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = 'Unlock Innovation and Optimize Efficiency in Operations | Feedback Form'
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Share your thoughts on Manufacturing & Assets, Planning, and Logistics. Help us unlock innovation and optimize efficiency in operations.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Share your thoughts on Manufacturing & Assets, Planning, and Logistics. Help us unlock innovation and optimize efficiency in operations.'
      document.getElementsByTagName('head')[0].appendChild(meta)
    }

    // Add keywords meta tag
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'manufacturing, assets, planning, logistics, operations, efficiency, innovation, feedback, form')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'keywords'
      meta.content = 'manufacturing, assets, planning, logistics, operations, efficiency, innovation, feedback, form'
      document.getElementsByTagName('head')[0].appendChild(meta)
    }

    // Add Open Graph tags for social media
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Unlock Innovation and Optimize Efficiency in Operations')
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      meta.content = 'Unlock Innovation and Optimize Efficiency in Operations'
      document.getElementsByTagName('head')[0].appendChild(meta)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Share your thoughts on Manufacturing & Assets, Planning, and Logistics. Help us unlock innovation and optimize efficiency in operations.')
    } else {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      meta.content = 'Share your thoughts on Manufacturing & Assets, Planning, and Logistics. Help us unlock innovation and optimize efficiency in operations.'
      document.getElementsByTagName('head')[0].appendChild(meta)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="/" element={<Navigate to="/feedback" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
