import { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-post'
import Hero from '../components/home-page/hero'

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Geting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is  the React framework for production - it makes building fullstack React apps and sites a breze and ships with built-in SSR. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs01',
    title: 'Geting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is  the React framework for production - it makes building fullstack React apps and sites a breze and ships with built-in SSR. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs02',
    title: 'Geting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is  the React framework for production - it makes building fullstack React apps and sites a breze and ships with built-in SSR. ',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs03',
    title: 'Geting Started With NextJs',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJs is  the React framework for production - it makes building fullstack React apps and sites a breze and ships with built-in SSR. ',
    date: '2022-02-10',
  },
]

function Homepage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default Homepage
