import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const PostEdit = () => {
  let history = useHistory();
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
    console.log(result.data);
    setPost(result.data);
  };

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:3000/posts/${id}`, post);
    history.push("/");
  };

  return (
    <div>
      <div className="m-5 p-2">
        <h2 className="text-center mb-4"> Post Edit </h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <label>Person Name:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostEdit;
