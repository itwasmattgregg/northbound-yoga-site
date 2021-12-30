import Head from "next/head";

import { fetchEntries } from "@utils/contentfulPosts";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Northbound Yoga</title>
      </Head>

      <main>
        <Header />
        <div className="posts">
          {posts.map((p) => {
            return (
              <Post
                key={p.date}
                date={p.date}
                image={p.heroImage?.fields}
                title={p.title}
              />
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
