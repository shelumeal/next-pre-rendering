import React from "react";
import Link from "next/link";

function PostList({ posts }) {
  return (
    <div>
      <>
        <h2>List of Posts</h2>
        {posts.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`posts/${item.id}`} passHref>
                <h2>
                  {item.id} {item.title}
                </h2>
              </Link>
              <hr />
            </div>
          );
        })}
      </>
    </div>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
