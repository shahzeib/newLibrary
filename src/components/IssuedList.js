import { useContext } from 'react'
import BooksContext from '../context/BooksContext'

const IssuedList = () => {
    const { books } = useContext(BooksContext)

    return (
        <>
            <header className='header'>
                <h2>{"Books Currently Issued"}</h2>
            </header>
            {books.map((book) => (
                book.count < 10 ?
                    <h3 key={book.id} className='book h3'>{book.title}
                        <div>
                            <span>Issued: {10 - book.count}</span>
                        </div>
                    </h3> : []
            ))}
        </>

    )
}

export default IssuedList
