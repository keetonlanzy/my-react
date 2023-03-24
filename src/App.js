// import logo from './logo.svg';
import './App.css';

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
  return (
    <div>
      <h3>Click below to get started!</h3>
      <button style={{height: '50px', width: '200px', borderRadius: '15px'
    }}>Let's Go!</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BigHeader />
        <MyTopics />
        <GetStarted />
      </header>
    </div>
  );
}

export default App;
