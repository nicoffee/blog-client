import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostListContainer from "../containers/PostListContainer";
import PostContainer from "../containers/PostContainer";

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={PostListContainer} />
        <Route path="/:postId" component={PostContainer} />
      </div>
    </Router>
  </Provider>
);

export default App;
