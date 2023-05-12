import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



import './Home.css'


const Home = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {

            const response = await blogFetch.get('/posts')

            const data = response.data
            setPosts(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="home">
            <h1>Últimos Posts</h1>
            {posts.length === 0 ? (<p>Carregando...</p>) : (
                posts.map((posts) => (
                    <div className="post" key={posts.id}>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                        <Link to={`/posts/${posts.id}`} className="btn">Ler Mais</Link>

                    </div>
                ))
            )}
        </div>
    )
}



export default Home