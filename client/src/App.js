// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
// // import NavBar from "./NavBar";
// import Login from "./components/Login";
// import Home from "./components/Home";


// function App() {
    
//     const [user, setUser] = useState(null);
//     // const [errors, setErrors] = useState([])
  
//     // const history = useHistory()
  
  
//     // useEffect(() => {
//     //   // auto-login
//     //   fetch("/me").then((r) => {
//     //     if (r.ok) {
//     //       r.json().then((user) => setUser(user));
//     //     };
//     //   });
//     // }, []);
  
//     // if (!user) return <Login onLogin={setUser} />;
  
//     return (
//       <BrowserRouter>
//         {/* <NavBar user={user} setUser={setUser}/> */}
//         <Switch>
//           <Route exact path="/">
//             <Home /> 
//           </Route>
//           <Route exact path="/login">
//             <Login onLogin={setUser} />
//           </Route>
//           {/* <Route path="/success">
//             <Success />
//           </Route>
//           <Route path="/canceled">
//             <Canceled />
//           </Route>
//           <Route path="/checkout">
//             <Checkout />
//           </Route> */}
//         </Switch>
//       </BrowserRouter>
//     );
//   };
//   export default App;

import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  const history = useHistory()


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        history.push("/")
      };
    });
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home user={user} setUser={setUser}/> 
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
      </Switch>
    </>
  );
};
export default App;