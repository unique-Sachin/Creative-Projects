import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const onClickBlogs = () => {
    router.push("/blogs");
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "blueviolet",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <button onClick={() => router.back()}>Go Back</button>
      <Link href="/"> Home </Link>
      <Link href="/counter"> Counter </Link>
      <button onClick={onClickBlogs}>Go to Blogs</button>
    </div>
  );
};

export default Navbar;
