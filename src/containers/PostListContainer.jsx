import { connect } from 'react-redux';
import PostList from '../components/PostList';

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(PostList);
