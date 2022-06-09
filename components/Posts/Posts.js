import { Button, Typography, Input } from "@mui/material";
import React, { useState, useEffect } from "react";

import { app, database } from "../../firebaseConfig";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";

import { getValue, getName } from "../../pages/features/posts/postsSlice";
import { useSelector } from "react-redux";

const dbInstance = collection(database, "posts");


const Posts = () => {

  const posts = useSelector(getName);
  const value = useSelector(getValue);

  useEffect(() => {
    getPosts();
  }, []);

  const [postsArray, setPostsArray] = useState([]);

  const getPosts = () => {
    getDocs(dbInstance).then((data) => {
      setPostsArray(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
  };

  getPosts();


  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Posts
      </Typography>
      {posts}
      {value}
      <div>
        {postsArray.map((post) => {
          return (
            <div key={post.id}>
              <p>{post.Title}</p>
              <p>{post.Excerpt}</p>
              <p>{post.Body}</p>
              <p>{post.Author}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};


export default Posts;
