import {urlFor} from '../lib/sanity'
import Tag from './Tag'
const Card = ({post}) => {
    return(
        <div className="card-container flex flex-col justify-between bg-black w-[400px] p-[10px] border-[10px] m-[20px] rounded-xl">
            <h2 className=' text-2xl font-semibold'>{post.title}</h2>
            <p>Published on : {new Date(post.publishedAt).toDateString()}</p>
            <picture>
            <img className="main-image w-[100%]" src={urlFor(post.mainImage)} alt={post.title + ' image'} />
            </picture>
            <hr className='mt-2' />
            <div className='info-container flex justify-between items-center mt-2'>
                <p>Posted by : {post.username}</p>
                <picture>
                <img className='avatar h-[50px] w-[50px] rounded-full' src={urlFor(post.authorImage)} alt={post.username + ' avatar'} />
                </picture>
            </div>

            <div className='tag-container flex flex-wrap'>
                {post.categories && post.categories.map((category , number) => (
                    <div key={number}>
                    {category && <Tag title={category?.title}/>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card