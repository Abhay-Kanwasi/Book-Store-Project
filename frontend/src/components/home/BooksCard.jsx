import BookSingleCard from "./BookSingleCard"

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-col-3 xl:grid-col-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </ div>
  )
}

export default BooksCard