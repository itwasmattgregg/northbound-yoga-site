import Layout from "@components/Layout";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "@utils/apollo-client";

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query BlogPosts {
        blogPostCollection {
          items {
            sys {
              id
            }
            slug
          }
        }
      }
    `,
  });

  return {
    paths: data.blogPostCollection.items.map((p) => ({
      params: { slug: p.slug, id: p.sys.id },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.slug);
  // const post = posts.find((post) => post.slug === context.params.pid);

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
            className="rounded-xl"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover"
            }} />
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

async function getPost(slug) {
  const { data } = await client.query({
    variables: { slug },
    query: gql`
      query BlogPosts($slug: String!) {
        blogPostCollection(where: { slug: $slug }) {
          items {
            title
            slug
            description
            publishDate
            content {
              json
            }
            author {
              name
            }
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

  return data.blogPostCollection.items[0];
}
