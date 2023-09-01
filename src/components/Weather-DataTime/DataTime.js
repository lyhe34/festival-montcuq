import { useContext } from "react";
import { Contexte } from "../Contexte";

export default function DataTime() {

  const contexte = useContext(Contexte)

  console.log(contexte);

  return (
    <div className="d-flex flex-column align-items-center">
      <div>Nous somme le  {contexte.date.toLocaleDateString()}</div>
      <div >Il est : {contexte.date.toLocaleTimeString()}</div>
    </div>

  )
}

// export default class DataTime extends Component {

//     constructor() {
//         super();
//         this.state = {
//             date: new Date(),
//         }
//     }

//     interval = setInterval(() => {
//         this.setState({ date: new Date() })
//     }, 1000)

    

//     render() {
//         return (
//             <div > {/**className="text-center" */}
//                 <div>
//                     Nous somme le  {this.state.date.toLocaleDateString()} 
//                 </div>

//                 <div >
//                     Il est : {this.state.date.toLocaleTimeString()} 
//                     </div>
//             </div>

//         )
//     }
// }




