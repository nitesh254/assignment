import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const SearchBar = ({ searchQuery, handleSearchQueryChange, handleSort, sortDirection }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={handleSearchQueryChange}
      sx={{
        borderWidth: '2px',
        flex: '1', 
        borderRadius: '0',
        height: '36px',
      }}
    />
    <Button
      variant="contained"
      onClick={handleSort}
      sx={{
        minWidth: '120px',
        borderWidth: '2px', 
        borderRadius: '0',
        height: '36px',
      }}
    >
      {sortDirection === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
    </Button>
  </Box>
);

export default SearchBar;


