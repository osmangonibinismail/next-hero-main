import React from 'react'


const getDetailsPage = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    return data;
}
const postDetailPage = async ({params}) => {
    const {title, body} = await getDetailsPage(params.id)
  return (
    <div className='border-2 h-screen'>
      post detail of {params.id}
      <h5>Title: {title}</h5>
      <h6>Description: {body}</h6>
    </div>
  )
}

export default postDetailPage
