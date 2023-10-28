import { Link, Outlet } from "react-router-dom";



export default function Layout(){


        

  return (
    <div>
      
     
  


      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Variance">Speed Car</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">HOME</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Register">REGISTER</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Variance">BACK</Link>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>


      

  


  
      
      
      <Outlet />
        
  
      
    </div>
  );
  }  