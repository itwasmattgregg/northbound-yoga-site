import Layout from "@components/Layout";
import Post from "@components/Post";
import { fetchPosts } from "@utils/contentfulPosts";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog" description="blog">
      <h1>Blog</h1>
      {posts.map((p) => {
        return (
          <Post
            key={p.sys.id}
            date={p.publishDate}
            image={p.heroImage}
            title={p.title}
            slug={p.slug}
            description={p.description}
          />
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await fetchPosts();

  return {
    props: {
      posts,
    },
  };
}
