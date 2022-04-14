import React from 'react'

const clickHandler = () => { alert("Hi, no functionalities currently work"); };
const Book = (props) =>
{
  const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={ img } alt='' />
      <h1>{ title }</h1>
      <h4>{ author }</h4>
      <button type="button" onClick={clickHandler}>Buy now</button>
    </article>
  )
};

export default Book
//You can have only 1 default export in a file, but as many named exports as we need
