// import React from 'react'

// function NavBar() {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar


import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";


function NavBar({ user, setUser}) {
    const history = useHistory();
    
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            history.push("/")
        }
        });
    }

  return (
    <Wrapper>
        <Link to="/" exact>Navbar</Link>
      <Nav>
      {!user ? 
      <Button as={Link} to="/login" exact>Login</Button> 
      :
      (user && user.seller) ?
        <Button variant="outline" onClick={handleLogoutClick}>
        Logout
        </Button>
      </>
      :  
      <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
      }
    </Nav>
  </Wrapper>
  );
}

    const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    `;

    export default NavBar;