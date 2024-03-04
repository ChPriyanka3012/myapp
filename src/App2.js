
// import Home from './Home';
// import Login from './Login';
 function App2(props){
    // if(props.name === ""){
    //     return <Login />
    // }
    // else{
    //     return <Home name={props.name} />  instead of if else condition use ternary operator
    // }
   // return (props.name==="" ?< Login/>:<Home name={props.name} />);

   //printing the same login and home files here
//    return (props.name===""?
//    (<div>
//     <center>
//         <h1>Sign In</h1>
//     <p>Username:  <input type="text"></input></p>
//     <p>Password:  <input type="password"></input></p>
//     <input type="button" value="submit"></input>
//     </center>
//    </div>):
//    <div>Hello {props.name}</div>);
   // printing the codition with logical operator &&
   return props.name===""&&
   (<div>
    <center>
        <h1>Sign In</h1>
    <p>Username:  <input type="text"></input></p>
    <p>Password:  <input type="password"></input></p>
    <input type="button" value="submit"></input>
    </center>
   </div>);

}
export default App2