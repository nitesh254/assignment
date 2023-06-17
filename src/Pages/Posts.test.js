import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Posts from './Posts';

it('fetches and displays posts', async () => {
    render(<Posts />);
  
    // Wait for the API call and data retrieval
    await waitFor(() => screen.getByText('Posts'));
  
    // Check if posts are displayed
    expect(screen.getByText('Post 1 Title')).toBeInTheDocument();
    expect(screen.getByText('Post 1 Body')).toBeInTheDocument();
    // Add more assertions for other posts as needed
  });

  it('filters posts based on search query', async () => {
    render(<Posts />);
  
    // Wait for the API call and data retrieval
    await waitFor(() => screen.getByText('Posts'));
  
    // Enter search query
    const searchInput = screen.getByLabelText('Search');
    fireEvent.change(searchInput, { target: { value: 'search query' } });
  
    // Check if filtered posts are displayed
    expect(screen.getByText('Filtered Post Title')).toBeInTheDocument();
    expect(screen.getByText('Filtered Post Body')).toBeInTheDocument();
    // Add more assertions for other filtered posts as needed
  });

  it('handles API error and displays error message', async () => {
    // Mock the fetch function to simulate an API error
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to retrieve posts'))
    );
  
    render(<Posts />);
  
    // Wait for the error to be displayed
    await waitFor(() => screen.getByText('Error'));
  
    // Check if error message is displayed
    expect(screen.getByText('Failed to retrieve posts')).toBeInTheDocument();
  });
  