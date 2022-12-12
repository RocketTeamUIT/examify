import React from 'react';
import Container from '../../layouts/components/Container';

const GradientBanner = ({ children }) => {
  return (
    <div className="h-[160px] bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] ">
      <Container className="bg-transparent h-full relative">
        <h1 className="font-bold text-h1 tracking-[3.6px] absolute top-1/2 -translate-y-1/2">{children}</h1>
      </Container>
    </div>
  );
};

export default GradientBanner;
