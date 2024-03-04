
/*import Pass from "./Pass";
import Fail from "./Fail";*/
function Result(props){
 if(props.marks>40){
    return <div>Pass</div>
 }
 else{
    return <div>Fail</div>
 }
}
export default Result