import PostGrid from './posts/posts-grid'
import casses from './featured-posts.module.css'

function FeaturedPosts(props) {
  return (
    <section className={casses.latest}>
      <h2> Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  )
}

export default FeaturedPosts
