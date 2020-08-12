// import React, { useState } from 'react';

// export default function LoginForm() {
//     const [data, setData] = useState({ username: "", password: "" });
//     let handleChange = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value });
//     };
//     let handleSubit = (e) => {
//         e.preventDefault();
//         console.log(data);
//         setData({ username: "", password: "" });
//     };
//     return (
//         <div>
//             <section>
//                 <article className="container">
//                     <h1>Login</h1>
//                     <form onSubmit={handleSubit}>
//                         <div>
//                             <label htmlFor="username">Username</label>
//                             <input
//                                 type="text"
//                                 id="username"
//                                 name="username"
//                                 placeholder="Enter Username"
//                                 required
//                                 value={data.username}
//                                 onChange={handleChange}
//                             ></input>
//                         </div>
//                         <div>
//                             <label htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 name="password"
//                                 placeholder="Enter Password"
//                                 required
//                                 value={data.password}
//                                 onChange={handleChange}
//                             ></input>
//                         </div>
//                         <div>
//                             <button>Login</button>
//                         </div>
//                     </form>
//                 </article>
//             </section>
//         </div>
//     );
// }
