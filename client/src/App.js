import './App.css';
import AddUser from './components/AddUser';
import AddUserNew from './components/AddUserNew';
import ShowUser from './components/ShowUser';

function App() {
  return (
    <div className="App">
    <AddUserNew></AddUserNew>
      {/* <AddUser></AddUser> */}
      <ShowUser></ShowUser>
    </div>
  );
}

export default App;
