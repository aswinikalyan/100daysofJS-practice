import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
//setupvars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71Q0+4VG1YL.jpg',
  author: 'Gillian FLyn',
  title:'Gone Girl'
}
const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/710ESoXqVPL.jpg',
  author: 'J.K.Rowling',
  title:'Harry Potter and The Sorcerers Stone'
}
const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91pZEozf9qL.jpg',
  author: 'Markus Zusak',
  title:'The Book Theif'
}
const fourthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/91nTClkODkL.jpg',
  author: 'John Green',
  title:'Looking for Alaska'
}
const fifthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/61nZqhftUPL.jpg',
  author: 'Suzzane Collins',
  title:'The Hunger Games'
}
const sixthBook = {
  img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594222283l/53375824.jpg',
  author: 'Alexandra Bracken',
  title:'Lore'
}

function BookList()
{
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book img={ thirdBook.img } title={ thirdBook.title } author={ thirdBook.author } />
      <Book img={fourthBook.img} title={fourthBook.title} author={fourthBook.author} />
      <Book img={fifthBook.img} title={fifthBook.title} author={fifthBook.author}/>
      <Book img={sixthBook.img} title={sixthBook.title} author={sixthBook.author}/>
    </section>
  ); 
}
const Book = (props) =>
{
  return <article className='book'>
    <img src={props.img} alt='' />
    <h1>{props.title}</h1>
    <h4>{ props.author }</h4>
  </article>
};
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