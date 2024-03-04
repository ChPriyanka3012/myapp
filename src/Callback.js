import Sqr from './Sqr';
function Callback(){
    const Sqrfunction=(num)=>{
        return  num*num;
    }
    return (<div><Sqr n={5} f={Sqrfunction}/></div>)
}
export default Callback