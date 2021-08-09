import { NotionRenderer } from "react-notion";
import Header from "../../components/Header";

import { getAllPosts } from '..'

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

export default ({ blocks }) => (
    <div className="overflow-x-hidden">
        <Header />
        <div className="relative max-w-lg mx-auto lg:max-w-7xl" style={{ maxWidth: 768 }}>
            <NotionRenderer blockMap={blocks} />
        </div>
    </div>
  
);

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
      paths: posts.map((row) => `/blog/${row.slug}`),
      fallback: false,
    };
  }