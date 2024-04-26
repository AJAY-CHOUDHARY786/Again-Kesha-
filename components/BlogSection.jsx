import Link from 'next/link'
import React from 'react'
const BlogSection = () => {
  return (
    <div className='blog-container-sec'>
        <div className="blog-heading">
        <h2>Kesha Jewellery Blog</h2>
        <p>Lorem ipsum dolor sit amet</p>
        </div>
       <div className="blog-container">
        <div className="blog-item">
            <img src="/blog-image.png" alt="blog" />
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Sed metus massa aliquet dictum. Consequat euismod aenean accumsan urna tortor. Massa fames amet sit fringilla egestas vulputate</p>
            <Link href='#'>Read more</Link>
        </div>
        <div className="blog-item">
            <img src="/blog-image.png" alt="blog" />
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Sed metus massa aliquet dictum. Consequat euismod aenean accumsan urna tortor. Massa fames amet sit fringilla egestas vulputate</p>
            <Link href='#'>Read more</Link>
        </div>
        <div className="blog-item">
            <img src="/blog-image.png" alt="blog" />
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Sed metus massa aliquet dictum. Consequat euismod aenean accumsan urna tortor. Massa fames amet sit fringilla egestas vulputate</p>
            <Link href='#'>Read more</Link>
        </div>
        
       </div>
        <div className="view-more-btn">
        <button className='view-more'>Read All Blogs</button>
        </div>
    </div>
  )
}

export default BlogSection