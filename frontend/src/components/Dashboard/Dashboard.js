import React from "react";
import "./Dashboard.css";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const dashboard = (props) => {
  let post = props.posts.map((post, index) => {
    return (
      <tr>
        <th scope="row"> {index + 1} </th>
        <td>{post.title}</td>
        <td>{post.description.substring(0, 40) + "..."}</td>
        <td>
          <button
            className="btn btn-sm btn-danger mx-2"
            onClick={(e) => props.deletePostHandler(post._id, e)}
          >
            Delete
          </button>
          <Link to={`/post/edit/${post._id}`} className="btn btn-sm btn-primary">
            Edit
          </Link>
        </td>
      </tr>
    );
  });
  return (
    <div className="container p-5 my-5">
      <Link to="/post/create" className="btn btn-primary float-left my-2">
        {" "}
        Add Post{" "}
      </Link>
      <Table striped bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Post</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{post}</tbody>
      </Table>
    </div>
  );
};

export default dashboard;
