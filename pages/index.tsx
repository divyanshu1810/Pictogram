import {getClient} from '../lib/sanity.server'
import groq from 'groq'
const Home = ({posts}:any) => {
  return (
    <div>
      
    </div>
  )
}

export async function getStaticProps({preview = false}:any){
  const posts = await getClient(preview).fetch(groq`
    *[_type == 'post' && publishedAt < now()] | order(publishedAt desc){
      _id,
      title,
      "username":author->username,
      "categories":category[]->{id,title},
      "authorImage":author->avatar,
      body,
      mainImage,
      slug,
      publishedAt
    }
  `)
  return {
    props:{
      posts,
    },
  }
}

export default Home
