import Layout from "@components/Layout";
import Post from "@components/Post";
import { gql } from "@apollo/client";
import client from "@utils/apollo-client";

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
  const { data } = await client.query({
    query: gql`
      query BlogPosts {
        blogPostCollection {
          items {
            title
            slug
            description
            publishDate
            sys {
              id
            }
            heroImage {
              title
              description
              contentType
              url(transform: { format: WEBP, width: 500 })
              width
              height
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.blogPostCollection.items,
    },
  };
}
