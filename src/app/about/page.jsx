import AboutContent from '@/components/AboutContent'
import React from 'react'
import { Headland_One } from 'next/font/google'

const headland = Headland_One({weight : ['400'], subsets : ['latin']})

export const metadata = {
  title: {
    absolute: "About"
  },
  description: "About Page",
  keywords: ["about", "about page"]
}
const aboutPage = () => {
  return (
    <div className={`${headland.className} min-h-screen px-12 py-24`}>
      <AboutContent />
    </div>
  )
}

export default aboutPage
