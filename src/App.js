import './App.css';
import HeaderNavbar from './app/Components/HeaderNavbar';
import PostContent from './app/Components/PostContent';


function App() {
  return (
    <div className="App">
      <h1 className='heading'>Redux Implementation</h1>
      <HeaderNavbar />
      <PostContent />
    </div>
  );
}

export default App;
