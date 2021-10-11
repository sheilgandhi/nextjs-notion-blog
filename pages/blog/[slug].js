import { NotionRenderer } from "react-notion";
import Header from "../../components/Header";
import Head from 'next/head'

import { getAllPosts } from '..'
import moment from "moment";

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

export default ({ blocks, post }) => (
    <div className="overflow-x-hidden">
      <Head>
        <title>{post.title}</title>
      </Head>
        <div className="relative p-3 max-w-lg mx-auto lg:max-w-7xl" style={{ maxWidth: 768 }}>
            <h1 className="font-bold text-5xl pb-1">{post.title}</h1>
            <p><span className="text-green-800">Sheil Gandhi </span> - {moment(new Date(post.date)).format('MMMM D Y')}</p>
            <NotionRenderer blockMap={blocks} />
        </div>
    </div>
  
);

export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
      paths: posts.map((row) => `/blog/${row.slug}`),
      fallback: `blocking`,
    };
  }