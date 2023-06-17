import React, { useState, useEffect } from 'react';
import PostList from '../Components/PostList';
import SearchBar from '../Components/SearchBar';
import ErrorComponent from '../Components/ErrorComponent';
import { Pagination } from '@mui/material';
import Box from '@mui/material/Box';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to retrieve posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSort = () => {
    const sortedPosts = [...currentPosts];

    if (sortDirection === 'asc') {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
      setSortDirection('desc');
    } else {
      sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
      setSortDirection('asc');
    }

    const updatedPosts = [...filteredPosts];
    updatedPosts.splice(indexOfFirstPost, postsPerPage, ...sortedPosts);

    setPosts(updatedPosts);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let filteredPosts = posts;
  if (searchQuery) {
    filteredPosts = posts.filter((post) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(lowerCaseQuery) ||
        post.body.toLowerCase().includes(lowerCaseQuery)
      );
    });
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Box sx={{ px: 2 }}>
      <h1>Posts</h1>
      {error && <ErrorComponent error={error} />}
      <Box sx={{ mb: 2 }}>
        <SearchBar
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
          handleSort={handleSort}
          sortDirection={sortDirection}
        />
      </Box>
      <PostList posts={currentPosts} />
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default Posts;

