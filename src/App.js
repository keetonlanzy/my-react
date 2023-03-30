import { useState } from 'react';
import { supabase } from './supabaseClient';
// import logo from './logo.svg';
import './App.css';

// CSS properties for table within Library()
const myTable = {
  borderSpacing: '15px',
  border: '5px solid blue',
  color: 'black',
  textAlign: 'left',
  width: '90%',
  backgroundColor: 'lightgrey',
}

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error } = await supabase
      .from('books')
      .select('*')
    setMyBooks(books);
  }
  getBooks();
  return (
    <table style={myTable}>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.ISBN}</td>
        </tr>
      ))
    }
    </table>
  );
}



const topics = [
  { id: 1, title: 'The Workflow', isFree: true},
  { id: 2, title: 'Making Changes', isFree: true},
  { id: 3, title: 'Mastery', isFree: false},
];

function MyTopics() {
  const listTopics = topics.map(topic =>
    <li
      key={topic.id}
      style={{
        color: topic.isFree ? 'green' : 'yellow'
      }}
      >
        {topic.title}
      </li>
      );
      return (
        <ul>{listTopics}</ul>
      )
}

function BigHeader() {
  return (
    <h1
      style = {{color: 'teal', fontsize: 'xx-large'
      }}
    >
      Welcome to React!
    </h1>  
  );
}

function GetStarted() {
  const [count, setCount] = useState(0);
  function doMagic() {
    setCount(count + 1);
  }
  return (
    <div>
      <h3>Click below to get started!</h3>
      <button onClick={doMagic} style={{height: '50px', width: '200px', borderRadius: '15px'
    }}>Let's Go! {count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <BigHeader />
        <MyTopics />
        <GetStarted />
      </header>
    </div>
  );
}

export default App;
