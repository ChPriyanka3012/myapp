function Calc(props){
    let x=props.num1;
    let y=props.num2;
    let res=x*y;
    return(<div>Result is: {res}</div>)
}
export default Calc