import React, { Component } from 'react';
import { Div } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

import { Loader } from './Loader';
import { Button } from './Button';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Div>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        {showModal && <Modal />}
      </Div>
    );
  }
}
