import React from "react";

const Blogs = ({blogs}) => {
  console.log(blogs);
  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
   let res = await fetch("http://localhost:3000/blogs");
   let data = await res.json();
  return {
    props: {
       blogs:data,
     }
   }
}
export default Blogs;


