// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import NavBar from "./NavBar";

function Home({user, setUser}) {
  
    return (
      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
          <NavBar user={user} setUser={setUser}/>
        </Grid>
        <Grid item xs={10} md={10}>
          <h1>home</h1>
          <p>Welcome to CauliflowerPower - the app designed to help you cook nutritious, wholesome, affordable food and reduce food waste. 
            This project originated from a recipe book I wrote a couple of years ago. You can learn more about the book and purchase it by clicking the button on the left. 
            To access the app features please click the login button on the left and start your journey!
          </p>
        </Grid>
      </Grid>
    );
  }
  
  
  const Wrapper = styled.section`
    max-width: 500px;
    margin: 40px auto;
    padding: 16px;
  `;
  
  const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
  `;
  
  export default Home;