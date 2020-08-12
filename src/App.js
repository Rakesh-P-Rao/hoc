// import React, { Component, Fragment } from 'react';
// import WithFullstack from './Components/Jspiders';
// import PureComp from './Components/PureComp';
// import RegularComponent from './Components/RegularComponent';
// import Jspiders from './Components/Jspiders';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return (
//       <Fragment>
//         <PureComp />
//         <RegularComponent />
//         <Jspiders />
//       </Fragment>
//     );
//   }
// }
 
// export default WithFullstack(App);





//// hooks
import React from 'react'
import CounterWithClass from './Components/Hooks/ClassBasedComp'
import HookBasedComp from './Components/Hooks/HookBasedComp'
import LoginForm from './Components/Hooks/LoginForm'
import GithubUser from './Components/Hooks/GithubUser'

export default function App() {
  return (
    <div>
      {/* <CounterWithClass /> */}
      {/* <HookBasedComp/> */}
      {/* <LoginForm/> */}
      <GithubUser/>
    </div>
  )
}
