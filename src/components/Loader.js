import React from 'react';
import { FallingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FallingLines
      color="#298cf0"
      width="100"
      visible={true}
      ariaLabel="falling-lines-loading"
    />
  );
};
