function Map(){
        let names=["hi","hello","sandy"]
      return (
        <ul>
            {names.map((e,i)=>(
                <li key={i}>{e}</li>
            ))}
        </ul>
      );
    }
export default Map