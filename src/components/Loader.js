import React from 'react';
import { FallingLines } from 'react-loader-spinner';
import { DivStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <DivStyled>
      <FallingLines
        color="#298cf0"
        width="100"
        // visible={true}
        ariaLabel="falling-lines-loading"
      />
    </DivStyled>
  );
};
