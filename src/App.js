import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import{trending,action,horror,romance,comedy} from './Urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost urls={trending } title='Trending'/>
        <RowPost urls={action} title='Action' isSmall/>  
        <RowPost urls={horror} title='Horror' isSmall/>  
        <RowPost urls={romance} title='Romance' isSmall/> 
        <RowPost urls={horror} title='Comedy'/> 
    </div>
  );
}

export default App;
