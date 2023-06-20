import './App.css';
import TopBar from './Navbar/TopBar'
import Background from './Navbar/Background'
import StoreListings from './Navbar/StoreListing'


function App() {
  return (
    <div className="App">
      <TopBar />
      <StoreListings />
      <Background />
    </div>
  );
}

export default App;