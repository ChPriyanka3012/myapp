import kerala from './kerala.jpg';
import pondi from './pondi.jpg';
import coorg from './coorg.jpg';
function Block(){
    return (
    <div className="main-cont">
        <div className="block1">
            <img src={kerala} alt="Kerala" height="200px" width="250px"></img>
            <h3>Kerala</h3>
            <p>2days-10k</p>
            <button className="btn">Book the Ticket</button>
        </div>
        <div className="block2">
        <img src={pondi}alt="Pondicherry" height="200px" width="250px"></img>
            <h3>Pondicherry</h3>
            <p>3days-8k</p>
            <button className="btn">Book the Ticket</button>
        </div>
        <div className="block3">
        <img src={coorg} alt="Coorg" height="200px" width="250px"></img>
            <h3>Coorg</h3>
            <p>3days-7k</p>
            <button className="btn">Book the Ticket</button>
        </div>
    </div>)
}
export default Block