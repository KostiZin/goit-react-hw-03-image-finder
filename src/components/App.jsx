import React, { Component } from 'react';
import { Div } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';

export class App extends Component {
  state = {};

  render() {
    return (
      <Div>
        <Searchbar /> <ImageGallery /> <ImageGalleryItem /> <Loader />
        <Button /> <Modal />
      </Div>
    );
  }
}