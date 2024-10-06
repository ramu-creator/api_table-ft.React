import { useState } from "react";
import "../Styles/style.css"
function FunTable(props){
    let [tableH,tH] = useState([]);
    let [tableB,tB] = useState([]);
    fetch("https://jsonplaceholder.typicode.com/users").then(x=>x.json()).then(data=>{
        let ids = Object.keys(data[0]).slice(0,4);
        tH(ids);
        tB(data);
    }).catch((error) => console.error('Error fetching data:', error));
    return(
        <>
        <table border="2">
           <thead>
                <tr>
                     {tableH.map((x,idx)=><th key={idx}>{x}</th>)}
                </tr>
           </thead>
           <tbody>
                {tableB.map(z=>
                {
                    return(
                        <tr key={z.id}>
                            <td>{z.id}</td>
                            <td>{z.name}</td>
                            <td>{z.username}</td>
                            <td>{z.email}</td>
                        </tr>
                    )
                }
                
               )}
           </tbody>
        </table>
      </>
    )

}
export default FunTable;