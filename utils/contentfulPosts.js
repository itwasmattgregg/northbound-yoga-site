const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

export async function fetchPosts(numberOfPosts = -1) {
  // const entries = await client.getEntries({ content_type: "blogPost" });
  // if (entries.items) return entries.items;
  // console.log(`Error getting Entries for blog posts.`);
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: "POST", // GraphQL *always* uses POST requests!
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`, // add our access token header
      },
      // send the query we wrote in GraphiQL as a string
      body: JSON.stringify({
        // all requests start with "query: ", so we'll stringify that for convenience
        query: `
        {
          blogPostCollection {
            items {
              title
              slug
              description
              body
              publishDate
              sys {
                id
              }
              heroImage {
                title
                description
                contentType
                url(transform: { format: WEBP, width: 500, })
                width
                height
              }
            }
          }
        }
              `,
      }),
    }
  );
  const { data } = await res.json();
  return data.blogPostCollection.items.slice(0, numberOfPosts);
}

export default { fetchPosts };
