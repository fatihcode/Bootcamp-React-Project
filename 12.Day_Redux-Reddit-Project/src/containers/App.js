import React, { Component } from "react";
import { connect } from "react-redux";
import Picker from "../components/Picker";
import Posts from "../components/Posts";
import { fetchPosts } from "../actions";


class App extends Component {

  state = { selectedSubreddit: "Please Select a Reddit Topic" }

  render() {
    console.log(this.props);

    const { posts, error, lastUpdated } = this.props.state
    const { fetchPosts } = this.props
    const { selectedSubreddit, } = this.state

    const onChange = (item) => {
      this.setState({ selectedSubreddit: item })
      fetchPosts(item)
    }

    return (
      <div className="main">
        <div className="header">

          <Picker onChange={onChange} value={selectedSubreddit}
            options={["reactjs", "frontend", "javascript", "reduxjs", "backend", "nodejs", "mongodb", "reduc", "undefined"]}
          />

          <p>
            {lastUpdated && (
              <span className="update">
                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
              </span>
            )}
          </p>

        </div>

        <Posts posts={posts} error={error} />

      </div>
    );
  }
}

export default connect((state) => ({ state }), { fetchPosts })(App)