// import React, { Component, Fragment } from 'react';

// class PureComp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { name: "shahi", time: null };
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ name: "shahi" });
//         });

//         // setInterval(() => {
//         //     let date = new Date().toLocaleTimeString();
//         //     this.setState({ time: date });
//         // }, 1000);
//     }

//     render() { 
//         console.log("--------------- PURE COMPONENT --------------");
//         return ( 
//             <Fragment>
//                 {/*this.state.time*/}
//                 {this.state.name}
//             </Fragment>
//          );
//     }
// }
 
// export default PureComp;