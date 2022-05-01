import React from 'react'
import Search from './Search'
import Listing from './Listing'
import HouseMarketReport from './HouseMarketReport'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Search />
        <Listing />
        <HouseMarketReport />
    </div>
  )
}

export default Home

// import React from "react";
// import NavBar from "./NavBar";
// import Grid from '@mui/material/Grid';
// function Home({itemsToDisplay, onCategoryChange, selectedCategory, onGenderChange, selectedGender, setSelectedCauses, causes}) {


//     return (
//         <div>
//             <h1>Home</h1>
//         </div>
//     )
// };

// export default Home;