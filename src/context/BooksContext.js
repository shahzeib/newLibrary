import { createContext, useState } from "react"
import BookList from '../books.json'

const BooksContext = createContext()

export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(BookList)

    return (
        <BooksContext.Provider
            value={{
                books,
                setBooks,
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}

export default BooksContext

