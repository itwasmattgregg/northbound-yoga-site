import Head from "next/head";

import Footer from "components/Footer";
import Post from "components/Post";
import Layout from "components/Layout";
import { gql } from "@apollo/client";
import client from "utils/apollo-client";
import { IBlogPost } from "types/contentful";
import { Newsletter } from "components";

export async function getStaticProps() {
  const { data }: { data: { blogPostCollection: { items: IBlogPost[] } } } =
    await client.query({
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

export default function Home({ posts }: { posts: IBlogPost[] }) {
  return (
    <Layout title="Home" description={`home`}>
      <div className="container">
        <Head>
          <title>Northbound Yoga</title>
        </Head>

        <main>
          <div className="posts">
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
          </div>
          <Newsletter />
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
