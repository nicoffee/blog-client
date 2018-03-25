// import {Component} from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import { fetchPosts } from '../actions';

// class PostListContainer extends Component {
//     componentDidMount()
// }

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(PostList);
