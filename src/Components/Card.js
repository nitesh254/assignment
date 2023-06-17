import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Cards = ({ title, body }) => {
  return (
    <Card sx={{ minWidth: 275, height: "100%", borderRadius: 0, boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
