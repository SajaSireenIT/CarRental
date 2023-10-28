import { Link, Outlet } from "react-router-dom";



export default function Variance(){
  

    return(
      <div className="kid">
          <div className="cover-container d-flex h-100 p-0.5 m-100 mx-auto flex-column">
    
            <main role="main" class="inner cover ">
              
              <h1 className="cover-heading">Choose your CARS.</h1>

              <div class="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   VARIANCE
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/Hyundai">Hyundai</Link></li>
    <li className="dropdown-divider"></li>
    <li><Link className="dropdown-item" to="/Honda">Honda </Link></li>
    <li className="dropdown-divider"></li>
    <li><Link className="dropdown-item" to="/Maruthi">Maruthi  </Link></li>
  </ul>
</div>

<div>
    <h3>RENT DATE</h3>
<div className="col-sm-6">
                                        <div className="col-sm-6">
                                            <input type="date" required placeholder="Return Date" className="form-control" />
                                            <div className="label" id="depart"></div>
                                        </div>

                                    </div>
</div>

<div>
    <h3>RETURN DATE </h3>
<div className="col-sm-6">
                                        <div className="col-sm-6">
                                            <input type="date" required placeholder="Return Date" className="form-control" />
                                            <div className="label" id="depart"></div>
                                        </div>

                                    </div>
</div>


              
              </main>

          </div>

           


      
            {/* <footer class="text-center text-white" style={{background:"color #f1f1f1;"}}>
 
 <div class="container pt-4">
 
   <section class="mb-4">
 
     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-facebook-f"></i
     ></a>


     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-twitter"></i
     ></a>

  
     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-google"></i
     ></a>

  
     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-instagram"></i
     ></a>

    
     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-linkedin"></i
     ></a>
   
     <a
       class="btn btn-link btn-floating btn-lg text-dark m-1"
       href="#!"
       role="button"
       data-mdb-ripple-color="dark"
       ><i class="fab fa-github"></i
     ></a>
   </section>
  
 </div>


 
 <div class="text-center text-dark p-3" style={{background:"color rgba(0, 0, 0, 0.2);"}}>
   © 2020 Copyright:
   <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
 </div>

    </footer> */}

          </div>
          
      )
}