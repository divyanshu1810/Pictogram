import {urlFor} from '../lib/sanity'
import Tag from './Tag'
const Card = ({post}) => {
    return(
        <div className="card-container flex flex-col justify-between max-w-xs mx-10 my-8 p-4 bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded-md">
            <h2 className=' text-2xl text-center font-semibold pb-2'>{post.title}</h2>
            <picture>
            <img className="main-image w-[100%] pb-2" src={urlFor(post.mainImage)} alt={post.title + ' image'} />
            </picture>
            <p className=' text-center font-semibold'>Published on : {new Date(post.publishedAt).toDateString()}</p>
            {/* <hr className='mt-2' /> */}
            {/* <div className='info-container flex justify-between items-center mt-2'>
                <p>Posted by : {post.username}</p>
                <picture>
                <img className='avatar h-[50px] w-[50px] rounded-full' src={urlFor(post.authorImage)} alt={post.username + ' avatar'} />
                </picture>
            </div> */}

            {/* <div className='tag-container flex flex-wrap'>
                {post.categories && post.categories.map((category , number) => (
                    <div key={number}>
                    {category && <Tag title={category?.title}/>}
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default Card