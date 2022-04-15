import React from 'react';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello people';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};
//Basically, we want to change the title on click which doesnt happen, because it isnt rendering anyting
//To overcome this, in the next example, we see why we need useState
export default ErrorExample;
