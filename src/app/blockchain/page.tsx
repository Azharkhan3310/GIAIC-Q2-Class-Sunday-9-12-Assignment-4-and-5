import Image from 'next/image';
import BlogCardData from '@/app/components/blogcard'; 

export default function Blockchain() {
        
    const blog = BlogCardData.find(card => card.id === "blockchain");

    return (
        <div className="blog_page fade-in">
            {blog ? (
                <div className="blog_content" key={blog.id}>
                    <h1 className='blog_title text-4xl md:text-5xl lg:text-6xl text-center'>{blog.title}</h1>
                    <Image className="blog_image" src={blog.image} alt={blog.title} />
                    <p className='blog_body'>{blog.body}</p>
                </div>
            ) : (
                <div className='other_pages'>
                    <div>
                        Blog Not Found
                    </div>
                </div>
            )}
        </div>
    );
}
