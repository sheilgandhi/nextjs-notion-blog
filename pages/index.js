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

function Home({ posts }) {
  return (
    <div className="flex flex-wrap bg-gray-100 overflow-x-hidden">
      <Header />
      <h1 className="w-screen p-2">Welcome to my blog </h1>
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