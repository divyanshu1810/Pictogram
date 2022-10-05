import groq from "groq"
import Tag from "../../components/Tag"
import { PortableText } from "@portabletext/react"
import { urlFor } from "../../lib/sanity"
import { getClient } from "../../lib/sanity.server"
const post = ({post}:any) => {
    console.log(post)
    return (
        <div></div>
    )
}

const query = groq`
    *[_type == "post" && slug.current == $slug][0]{
        title,
        "username":author->username,
        "about":author->bio,
        "categories":categories[]->{id,title},
        "authorImage":author->avatar,
        body,
        publishedAt,
        mainImage,
        postedAt
    }`

export async function getStaticPaths(){
    const paths = await getClient().fetch(
        groq`*[_type == "post" && defined(slug.current)][].slug.current`
    )

    return {
        paths:paths.map((slug : any)=>({params:{slug}})),
        fallback:true,
    }
}

export async function getStaticProps({params,preview = false}:any){
    const post =  await getClient(preview).fetch(query,{slug:params.slug,})

    return {
        props : {
            post,
        }
    }
}
export default post