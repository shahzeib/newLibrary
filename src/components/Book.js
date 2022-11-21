import { useContext, useEffect, useState } from 'react'
import Button from './Button'
import BooksContext from '../context/BooksContext'

const Book = ({ book }) => {
    const [count, setCount] = useState(10)
    const { books, setBooks } = useContext(BooksContext)

    useEffect(() => {

        setBooks(books.map(item => {
            if (item.id === book.id) return { ...item, count: count }
            return item
        }))

    }, [count])

    function issueBook() {
        setCount(prevCount => prevCount - 1)

    }

    function returnBook() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div className={`book`}>
            <h3>
                {book.title}{' '}
                <div>
                    <span>Total: {count} </span>
                    <Button disabled={count > 0 ? false : true} color='green' text='Issue' onClick={issueBook} />
                    <Button disabled={count < 10 ? false : true} color='blue' text='Return' onClick={returnBook} />
                </div>
            </h3>
            <p>Author: {book.author}, Year: {book.year}</p>
        </div>
    )
}

export default Book