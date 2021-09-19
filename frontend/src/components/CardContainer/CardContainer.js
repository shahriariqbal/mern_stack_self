import React from "react";
import "./CardContainer.css";
import CardDemoImg from "./card-demo.jpg"; // with import

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const cardcontainer = (props) => {
  let post = props.posts.map((post, index) => {
    return (
      <div className="col-md-4 my-2">
        <Card className="">
          <CardImg
            className="card-image"
            top
            width="100%"
            src={CardDemoImg}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{post.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>{post.description}</CardText>
            <Link to={`/post/details/${post._id}`} className="btn btn-primary">
              View
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  });

  return (
    <div className="row col-md-12 d-flex justify-content-center p-5">
      {post}
    </div>
  );
};

export default cardcontainer;
