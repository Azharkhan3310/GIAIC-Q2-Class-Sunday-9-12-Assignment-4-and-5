import Image from 'next/image';
import BlogCardData from '@/app/components/blogcard'; 

export default function Home() {
  return (
    <div className="parent_container">
      <div className='title text-4xl md:text-5xl lg:text-6xl text-center'>
        Latest insights in Emerging Technologies
      </div>
      <div className='blogs_card_container fade-in-top' >
        {BlogCardData.map((card) => (
          <div className="blog_card" >
            <Image className="blog_card_image" src={card.image} alt={card.title} />
            <h1 className='blog_card_title'>{card.title}</h1>
            <p className='blog_card_description'>{card.description}</p>
            <button className='readMore tracking-in-expand'><a href={`/${card.id}`}>Read More</a></button>
          </div>))}
      </div>
    </div>
  );
}
