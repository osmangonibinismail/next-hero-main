import AboutContent from '@/components/AboutContent'
import React from 'react'

export const metadata = {
  title: {
    absolute: "About"
  },
  description: "About Page",
  keywords: ["about", "about page"]
}
const aboutPage = () => {
  return (
    <div>
      <AboutContent />
    </div>
  )
}

export default aboutPage
