import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./Post.css";
import CardDemoImg from "../../assets/images/card-demo.jpg";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  const { title, description } = post;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3000/posts/${id}`);
    setPost(result.data);
  };

  return (
    <div className="container p-5 my-2">
      <h2 className="my-2 text-center"> {title}</h2>
      <div>
        <img src={CardDemoImg} className="post-image" />
      </div>

      <p className="text-center">{description}</p>
    </div>
  );
};

export default Post;
