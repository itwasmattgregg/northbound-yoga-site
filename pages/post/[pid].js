import { useRouter } from "next/router";
import { fetchPosts } from "@utils/contentfulPosts";

export async function getStaticPaths() {
  const posts = await fetchPosts();

  return {
    paths: posts.map((p) => ({ params: { pid: p.slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps() {
  return {
    props: { post: {} },
  };
}

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
