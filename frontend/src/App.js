import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "../src/components/Navbar/Navbar";
import CardContainer from "../src/components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Post from "./components/Post/Post";
import PostCreate from "./components/PostCreate/PostCreate";
import PostEdit from "./components/PostEdit/PostEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    posts: [],
    newPostData: {
      title: " ",
      description: " ",
    },
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:3000/posts").then((response) => {
      console.log(response.data);
      this.setState({ posts: response.data });
    });
  }

  handlePost = (e) => {
    let { newPostData } = this.state;

    newPostData.title = e.target.value;

    this.setState({ newPostData });
  };

  handleDescription = (e) => {
    let { newPostData } = this.state;

    newPostData.description = e.target.value;

    this.setState({ newPostData });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: this.state.newPostData.title,
      description: this.state.newPostData.description,
    };
    console.log(post);

    axios
      .post(`http://127.0.0.1:3000/posts`, this.state.newPostData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  deletePostHandler = (id, e) => {
    axios.delete(`http://127.0.0.1:3000/posts/${id}`).then((res) => {
      const posts = this.state.posts.filter((item) => item.id !== id);
      this.setState({ posts });
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Switch>
            <Route exact path="/">
              <CardContainer posts={this.state.posts} />
            </Route>

            <Route exact path="/post/details/:id">
              <Post />
            </Route>
            <Route exact path="/post/create">
              <PostCreate
                handleSubmit={this.handleSubmit}
                handlePost={this.handlePost.bind(this)}
                handleDescription={this.handleDescription.bind(this)}
                title={this.state.title}
                description={this.state.description}
              />
            </Route>
            <Route exact path="/post/edit/:id">
              <PostEdit />
            </Route>

            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard
                posts={this.state.posts}
                deletePostHandler={this.deletePostHandler.bind(this)}
              />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
