import BusinessList from '../businessList/BusinessList';
import SearchBar from '../searchBar/SearchBar';
import './App.css';

export default function App() {
  return (
    <div className="App">

      <SearchBar/>
      <BusinessList/>
      
    </div>
  );
}