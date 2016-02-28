import {deferResolve} from 'reasync';
import React, { PropTypes } from 'react';
import { shouldFetchPosts,loadPosts } from './actions';
import { connect } from 'react-redux';
import PostListItem from './components/PostListItem';
import { StyleSheet, css } from 'aphrodite';

const defer = ({ getState,dispatch }) => shouldFetchPosts(getState()) ? dispatch(loadPosts()) : undefined;

const mapStateToProps = (state) => ({
  posts: state.posts.data,
});

const PostListPage = ({ posts }) =>
  <div>
    <h2 className={css(styles.title)}>PostListPage</h2>
    {posts.map((post, i) => <PostListItem key={post.id} post={post} />)}
  </div>;

PostListPage.PropTypes = {
  posts: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    lineHeight: '1.5',
    margin: '1rem 0',
  },
});

export default deferResolve(defer)(connect(mapStateToProps)(PostListPage));
