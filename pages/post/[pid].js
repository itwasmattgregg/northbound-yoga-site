import { fetchPosts } from "@utils/contentfulPosts";
import Layout from "@components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

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

  // Probably handle errors here
  return {
    props: { post },
  };
}

const Post = ({ post }) => {
  return (
    <Layout title={post.title} description={post.description}>
      <div className="container blog-post">
        <div className="relative w-full h-56 mb-8">
          <Image
            alt={post.heroImage.title}
            src={post.heroImage.url}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <h1 className="font-serif text-6xl">{post.title}</h1>
        <h3 className="mb-8 font-serif italic text-dark-green">
          {post.author?.name} - {post.publishDate.substring(0, 10)}
        </h3>
        {documentToReactComponents(post.content?.json)}
      </div>
    </Layout>
  );
};

export default Post;
