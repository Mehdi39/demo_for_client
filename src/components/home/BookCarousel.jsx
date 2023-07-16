"use client";
import Carousel from "react-multi-carousel";
import Image from 'next/image';
import book_1 from '../../assets/book_1.jpeg';
import book_2 from '../../assets/book_2.jpeg';
import book_3 from '../../assets/book_3.jpeg';
import book_4 from '../../assets/book_4.jpeg';
import book_5 from '../../assets/book_5.jpeg';
import book_6 from '../../assets/book_6.jpeg';
import book_7 from '../../assets/book_7.jpeg';

const books = [
    {
        serial: book_1,
        name: "Book 1",
    },
    {
        serial: book_2,
        name: "Book 2"
    },
    {
        serial: book_3,
        name: "Book 3"
    },
    {
        serial: book_4,
        name: "Book 4"
    },
    {
        serial: book_5,
        name: "Book 5"
    },
    {
        serial: book_6,
        name: "Book 6"
    },
    {
        serial: book_7,
        name: "Book 7"
    }
]

const BookCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
      <Carousel responsive={responsive} infinite={true}>
      {
          books.map(book => (
              <div className="m-2 mx-auto">
                <Image src={book.serial} className=""/>
                <p>{book.name}</p>
              </div>
          ))
      }
      </Carousel>
  );
};

export default BookCarousel;
