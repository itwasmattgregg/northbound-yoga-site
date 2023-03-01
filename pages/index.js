import Head from "next/head";
import Image from "next/image";

import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import Post from "@components/Post";
import Layout from "@components/Layout";
import Newsletter from "@components/Newsletter";

export default function Home() {
  return (
    <Layout title="Home" description={`home`}>
      <div className="container">
        <Head>
          <title>Northbound Yoga</title>
        </Head>

        <main>
          <div className="posts">
            {/* {posts.map((p) => {
              return (
                <Post
                  key={p.sys.id}
                  date={p.date}
                  image={p.heroImage?.fields}
                  title={p.title}
                  slug={p.slug}
                />
              );
            })} */}
          </div>

          <Newsletter />
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
