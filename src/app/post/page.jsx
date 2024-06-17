import React from 'react'
import { getPosts } from '../services/postApi';
import Link from 'next/link';

export const metadata = {
    title: 'Post',
    description: "This isPost page"
}

const postPage = async () => {
    const postsData = await getPosts();
    return <div className=''>
        <h6>All Post</h6>
        <div className='grid grid-cols-4 gap-4'>
            {
                postsData?.slice(0,20)?.map(({title, body, id}) =>(
                    <div className='border-2 p-6' key={id}>
                        <h5>Title: {title}</h5>
                        <h6>Body: {body}</h6>
                        <button className='bg-cyan-700 text-white p-2'><Link href={`/post/${id}`}>details</Link></button>
                    </div>
                ))
            }
        </div>
    </div>
}

export default postPage
