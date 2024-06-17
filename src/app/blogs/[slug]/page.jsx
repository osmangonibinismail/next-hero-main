import React from 'react'

const slugPage = ({params}) => {
    console.log(params.slug)
    const {title, description} = blogs.find((blog) => blog.slug == params.slug);
  return (
    <div>
      <h5>{title}</h5>
      <h5>{description}</h5>
    </div>
  )
}

const blogs = [
    {
        "slug": "web-development-basics",
        "title": "Web Development Basics",
        "description": "An introductory guide to web development, covering HTML, CSS, and JavaScript."
    },
    {
        "slug": "responsive-design",
        "title": "Responsive Design",
        "description": "Learn how to create websites that look great on all devices using responsive design techniques."
    },
    {
        "slug": "state-management-in-react",
        "title": "State Management in React",
        "description": "An in-depth look at managing state in React applications using various state management libraries."
    },
    {
        "slug": "api-integration",
        "title": "API Integration",
        "description": "A comprehensive guide to integrating third-party APIs into your web applications."
    },
    {
        "slug": "performance-optimization",
        "title": "Performance Optimization",
        "description": "Techniques and best practices for optimizing the performance of your web applications."
    }
]

export default slugPage
