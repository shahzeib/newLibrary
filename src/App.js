import Header from './components/Header';
import Books from './components/Books';
import IssuedList from './components/IssuedList';
import { BooksProvider } from './context/BooksContext'

function App() {

  return (
    <BooksProvider>
      <div className='container'>
        <Header title='New Library Frontend'></Header>
        <div className='rowed'>
          <Books />
          <div className='issue-container'>
            <IssuedList />

          </div>
        </div>
      </div>
    </BooksProvider>
  );
}

export default App;
