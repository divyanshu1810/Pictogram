import {urlFor} from '../lib/sanity'
import Tag from './Tag'
const Card = ({post}) => {
    return(
        <div className="card-container">
            <h2>{post.title}</h2>
            <p>Published on : {new Date(post.publishedAt).toDateString()}</p>
            <picture>
            <img className="main-image" src={urlFor(post.mainImage)} alt={post.title + ' image'} />
            </picture>
            <hr />
            <div className='info-container'>
                <p>Posted by : {post.username}</p>
                <picture>
                <img className='avatar' src={urlFor(post.authorImage)} alt={post.username + ' avatar'} />
                </picture>
            </div>

            <div className='tag-container'>
                {/* {post.categories.map((category:any) => (
                    <Tag key={category.id} title={category.title}/>
                ))} */}
            </div>
        </div>
    )
}

export default Card