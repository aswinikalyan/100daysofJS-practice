import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { books } from './books'//this is a named export-import
import Book from './Book'; //you can see the difference between named and default export here
//setupvars


function BookList()
{
  return (
    <section className='booklist'>
      { books.map((book) =>
      {
        return (
          <Book key={book.id}{...book}></Book>
        );
      })}
    </section>
  ); 
}

// const Book = (props) =>
// {  This is another way of doing the same thing as above
// You can also pass an object as a parameter too: in Book =({img,title,author}) =>{}
//   const {img,title,author} = props;
//   return <article className='book'>
//     <img src={img} alt='' />
//     <h1>{title}</h1>
//     <h4>{author }</h4>
//   </article>
// }; see props children in detail


// when you do inline styling, you are essentially adding a js object which is why the above notation is used
ReactDOM.render(<BookList />, document.getElementById('root'));