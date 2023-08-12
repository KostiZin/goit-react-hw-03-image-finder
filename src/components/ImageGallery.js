import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = () => {
  return (
    <List className="gallery">
      <ImageGalleryItem />
    </List>
  );
};
