import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ prop }) => {
  return (
    <List className="gallery">
      {prop.map(image => (
        <ImageGalleryItem
          key={image.id}
          big={image.largeImageURL}
          small={image.webformatURL}
        />
      ))}
    </List>
  );
};
