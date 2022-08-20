import Head from "next/head";
import Image from "next/image";

import logo from "../assets/NBY_horz 1.svg";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Post from "@components/Post";
import Layout from "@components/Layout";

export default function Home({ posts }) {
  return (
    <Layout title="Home" description={`home`}>
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
                  key={p.sys.id}
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
    </Layout>
  );
}
