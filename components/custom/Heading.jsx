import React from 'react';

const Heading = ({ content }) => {
  return (
    <h2 className="text-green-base text-3xl md:text-4xl font-bold lg:text-5xl my-5 md:my-10">
      {content}
    </h2>
  );
};

export default Heading;
