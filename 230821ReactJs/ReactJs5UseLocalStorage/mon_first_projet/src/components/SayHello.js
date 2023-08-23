import React, { useState } from "react";

export default function SayHello() {
    const [name, setName] = useState("")
    return (
        <div>
            <h1>
                Bonjour, {name}
            </h1>
            <input onChange={e => setName(e.target.value)} />
        </div>
    )
}


// import React, { useState } from "react";

// export default function SayHello() {
//   const [name, setName] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <div>
//       <h1>Bonjour, {name !== "" ? name : "Anonyme"}!</h1>
//       <input
//         type="text"
//         placeholder="Entrez votre nom"
//         value={name}
//         onChange={handleNameChange}
//       />
//     </div>
//   );
// }
