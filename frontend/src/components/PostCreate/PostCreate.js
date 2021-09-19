import React from "react";

const postCreate = (props) => {
  return (
    <div>
      <div className="m-5 p-2">
        <h2 className="text-center mb-4"> Post Form Testing </h2>

        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label>Person Name:</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={props.title}
              onChange={props.handlePost}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={props.description}
              onChange={props.handleDescription}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default postCreate;
