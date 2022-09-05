import { fetchPosts } from "@utils/contentfulPosts";
import Layout from "@components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";

export async function getStaticPaths() {
  const posts = await fetchPosts();

  return {
    paths: posts.map((p) => ({ params: { pid: p.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const posts = await fetchPosts();
  const post = posts.find((post) => post.slug === context.params.pid);

  console.log(post);
  // Probably handle errors here
  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  return (
    <Layout title={post.title} description="home">
      <div className="container">
        <main>
          <h1>{post.title}</h1>
          <h3>{post.author.name}</h3>
          {documentToReactComponents(post.content.json)}
        </main>
      </div>
    </Layout>
  );
};

export default Post;
