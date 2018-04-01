import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostListContainer from "../containers/PostListContainer";
import Post from "../components/Post";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={PostListContainer} />
        <Route path="/:postId" component={Post} />
      </div>
    </Router>
  </Provider>
);

export default App;
