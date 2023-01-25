import Container from 'layouts/components/Container';
import React from 'react';

const withHeader = (header) => (WrappedComponent) => {
  function WithHeader() {
    return (
      <>
        <div className="h-[160px] bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] flex items-center">
          <Container overflowVisible className="bg-transparent">
            <h1 className="font-bold text-h1 tracking-wider text-t_dark">{header}</h1>
          </Container>
        </div>

        <WrappedComponent />
      </>
    );
  }

  WithHeader.displayName = `WithHeader(${getDisplayName(WrappedComponent)})`;
  return WithHeader;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withHeader;
