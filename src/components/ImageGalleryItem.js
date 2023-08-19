import React from 'react';
import { ListItem, ListItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ big, small }) => {
  return (
    <ListItem className="gallery-item">
      <ListItemImg src={big} alt={small} />
    </ListItem>
  );
};
