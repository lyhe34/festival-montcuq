import React, { useContext } from "react";
import { Contexte } from "../Contexte";

export default function DataTime() {

  const { date } = useContext(Contexte)

  return (
    <div>
      <div>Nous somme le  {date.toLocaleDateString()}</div>
      <div >Il est : {date.toLocaleTimeString()}</div>
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




