function App1(props){
     // its not working
    return (
    <h1 style={{color:'blue',fontSize:100}}>Hello {props.name}.Is your age {props.age}?</h1>)
    //we can use inline styling and props in same function instaed of index.js
}
export default App1
App1.defaultProps={name:"Cat",age:20}