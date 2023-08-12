import React from 'react';
import { DivOverlay, DivModal } from './Modal.styled';

export const Modal = () => {
  return (
    <DivOverlay className="overlay">
      <DivModal className="modal">
        <img src="" alt="" />
      </DivModal>
    </DivOverlay>
  );
};
