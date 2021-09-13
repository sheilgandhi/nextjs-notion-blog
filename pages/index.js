import Link from "next/link";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const NOTION_BLOG_ID = 'a6965701f4944000baf22e3beb54ee9f'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
  };
}

const Home = ({ posts }) => {
  return (
    <div className="flex flex-wrap overflow-x-hidden">
      <Header />
      <div className="w-screen p-2">
        <h1 className="">Welcome to my blog </h1>
        <blockquote className="border-l-2 border-gray-400 p-2">
          <p>“You wasted $150,000 on an education you coulda got for a buck fifty in late charges at the public library.”</p>
          <small><strong> - Will Hunting </strong> (played by Matt Damon), <em>Good Will Hunting </em></small>
        </blockquote>
      </div>
      {posts.map((post) => (
        <Link key={post.id} href="/blog/[slug]" as={`/blog/${post.slug}`}>
          <div className="flex flex-row">
            <PostCard key={post.id} post={post} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home