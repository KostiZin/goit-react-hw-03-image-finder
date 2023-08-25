import React, { Component } from 'react';
import { Div } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';

import { Loader } from './Loader';
import { Button } from './Button';
import { fetchPictures } from './api';
// import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    // showModal: false,
    showButton: false,
    showLoader: false,
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      // loading: true,
      // isActive: true,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        const fullQuery = query;
        const searchIndex = fullQuery.indexOf('/');
        const slicedQuery = fullQuery.slice(searchIndex + 1);

        this.setState({
          showLoader: true,
          showButton: false,
        });

        const pictures = await fetchPictures(slicedQuery, page);

        this.setState({
          images: pictures.hits,
          // showButton: true,
          showLoader: false,
          showButton: true,
        });
        // if (this.state.images.length)
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidMount() {
    // this.setState({ loading: false });
  }

  render() {
    const { images, showLoader, showButton } = this.state;
    console.log(images);
    return (
      <Div>
        <Searchbar handleQuery={this.changeQuery} />
        {showLoader ? <Loader /> : <ImageGallery prop={images} />}
        {showButton && images.length === 12 ? (
          <Button handleClick={this.handleLoadMore} />
        ) : (
          !showButton
        )}
        {images.length === 0 && <p>Error</p>}

        {/* {showModal && <Modal />} */}
      </Div>
    );
  }
}
