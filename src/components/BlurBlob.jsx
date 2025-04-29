// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position = { top: '50%', left: '50%' }, size = { width: '200px', height: '200px' } }) => {
  // Destructure position and size with default values
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          backgroundColor: '#FFD700', // Set background color to gold
        }}
      ></div>
    </div>
  );
};

// Define prop types with default values
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

// Default props if none are provided
BlurBlob.defaultProps = {
  position: { top: '50%', left: '50%' },
  size: { width: '200px', height: '200px' },
};

export default BlurBlob;
