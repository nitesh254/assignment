import React from 'react';
import Grid from '@mui/material/Grid';
import Cards from '../Components/Card';

const PostList = ({ posts }) => (
  <Grid container spacing={2}>
    {posts.map((post) => (
      <Grid item xs={12} sm={6} md={4} key={post.id}>
        <Cards title={post.title} body={post.body} />
      </Grid>
    ))}
  </Grid>
);

export default PostList;
