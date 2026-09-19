import { CardPost } from "../../components/CardPost"
import styles from './feed.module.css'
import { useState, useEffect } from 'react'

export const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/blog-posts')
    }, [])

    return (
        <main className={styles.grid}>
            {posts.map(post => <CardPost key={post.slug} post={post} />)}
        </main>
    )
}
