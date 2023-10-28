// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, Outlet} from "react-router-dom"

// export default function Honda() {
//   const [arr, setArr] = useState([]);

//   useEffect(() => {
//     fetchHondaData();
//   }, []);

//   const fetchHondaData = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/brands/Honda");
//       setArr(response.data[0].models);
//     } catch (error) {
//       console.error("Error fetching Honda data:", error);
//     }
//   };

//   return (
//     <div>
//       {arr.map((el) => (
//         <div className="card ms-7" style={{ width:"18rem",margin: "10px" }} key={el.brand}>
//           <div className="row g-0">
//             {<div className="col-md-4"> 
//               <img src={el.image} className="card-img" alt="Honda" />
//               </div> }
//             <div className="col-md-8">
//               <div className="card-body">
                
//                 <h5 className="card-text">{el.model}</h5>
//                 <p className="card-text">{el.price}</p>
//                 <p className="card-text">{el.type}</p>
//                 <p className="card-text">{el.fuel}</p>
//                 <p className="card-text">{el.seats}</p>
//                 <Link to="/Payment" className="btn btn-primary" >BOOK NOW</Link> 
                
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <Outlet/>
//     </div>
//   );
  
// }





import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
 function Honda(){
const[arr,setArr]=useState([]);
// const [order, setOrder] = useContext(UserContext);

 
 useEffect(()=>{
  axios.get("http://localhost:8083/brands/Honda").then((res)=>setArr(res.data)
  );
 },[]);

return (
  <>
  <div>
    {arr.map((el) => {
const{model,type,brand,fuel,seat,price}=el;


return <div className="card" style={{width: "40rem"}}key={model} >
        {/* <img src={image} class="card-img-top" alt="image"/> */}
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
          <h6 className="card-title">{brand}</h6>
          <p className="card-text"> Sale price: Rs.{price}</p>
          <p className="card-text"> type: {type}</p>
          <p className="card-text"> fuel: {fuel}</p>
          <p className="card-text"> seats: {seat}</p>
          <Link to="/Payment" className="btn btn-primary" >BOOK NOW</Link> 
        </div>
      </div>
    })}
</div>
  </>
);


}

export default Honda;