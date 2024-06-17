import Link from 'next/link'
import React from 'react'

const blogsPage = () => {
    return (
        <div className='p-24'>
            {
                blogs.map((blog => (
                    <div key={blog.slug} className='border-black border-2 p-12'>
                        <h3>{blog.title}</h3>
                        <h3>{blog.description}</h3>
                        <button className='text-white bg-cyan-600 p-3'>
                            <Link href={`/blogs/${blog.slug}`}>view details</Link>
                        </button>
                    </div>
                )))
            }
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


export default blogsPage
