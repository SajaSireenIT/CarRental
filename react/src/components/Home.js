import { Link, useLocation } from "react-router-dom";



export default function Home(){
  

    return(
      <div className="kid">
          <div class="cover-container d-flex h-100 p-0.5 m-100 mx-auto flex-column">
    
            <main role="main" class="inner cover ">
              
              <h1 class="cover-heading">Travel in your dream car</h1>
              <p class="lead" style={{fontSize:"30px",font:"weight-900;"}}>Share your listings on social media or with friends and family to increase their visibility...</p>
              <button type="button" class="btn btn-outline-primary"><Link to="/Login">Sing Up Now</Link></button>

            </main>


      
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
          </div>
      )
}