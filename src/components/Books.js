import { useContext } from 'react'
import Book from './Book'
import BooksContext from '../context/BooksContext'

const Books = () => {
    const { books } = useContext(BooksContext)

    return (
        <div className='books'>
            {books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </div>
    )
}

export default Books