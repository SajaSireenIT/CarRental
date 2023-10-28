// import{UserContext} from "../context/UserContext"
import {  Field, Form, Formik,ErrorMessage } from "formik";
import axios from "axios";
// import { useContext, useState } from "react";
import { json } from "react-router";
import {Link} from 'react-router-dom'
import { useNavigate} from 'react-router';

export default function Login(){
    // const {Person,setPerson}=useContext(UserContext);
    const Navigate = useNavigate();
    const submitHandler = async(values, setSubmitting) => {
        alert(JSON.stringify(values));
        
        const user=await axios.post('http://localhost:8083/user/login',values)
        if(user.data!=="invalid"){
            localStorage.setItem('user',JSON.stringify(user));
            callhome();
        }
        else{
            alert("No User Found!");
            Navigate('/Signup');
        }
        console.log(user.data)
        // setPerson(user.data);
        
        // console.log(Person)
        // console.log(user);
        // Person.map((el)=>console.log(el))
        
      };
      const callhome=()=>{
        Navigate('/Variance');
        window.location.reload();
    }
      const validator=(values)=>{
        const errors = {};
        if (!values.uname) {
          errors.uname = "Required";
        // } else if (
        //  values.email.indexOf("@")<0 || values.email.indexOf("@")>values.email.lastIndexOf(".")
        // ) {
          errors.uname = "Invalid email address";
        }
        return errors;
    };
    return <div>
        <section className="vh-60" style={{backgroundColor:"#9A616D"}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-xl-10">
                    <div className="card" style={{borderRadius:"1rem"}}>
                    <div className="row g-0">
                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                            alt="login form" className="img-fluid" style={{borderRadius:"1rem 0 0 1rem"}}/>
                           
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                        <div className="card-body p-4 p-lg-5 text-black">
                            <div className="d-flex align-items-center mb-3 pb-1">
                                <i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}}>Logo</i>
                                <span className="h1 fw-bold mb-0"></span>
                            </div>

                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Login into your account</h5>
                        <Formik
                        onSubmit={submitHandler}
                        initialValues={{ uname: "",password:"" }}
                        validate={validator}
                        style={{margin:'0 auto'}}
                        >
                        {({ isSubmitting }) => (
                            <Form>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example17" >User Name</label>
                                <Field type="uname" id="uname" className="form-control form-control-lg" name="uname" placeholder=" " />
                                <ErrorMessage class="form-text text-muted" name="uname" id="uname" component="div" />
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <div className="form-group">
                                <label className="form-label" for="form2Example27" >Password</label>
                                <Field type="password" id="password" className="form-control form-control-lg" name="password" placeholder=" "/>
                                <ErrorMessage class="form-text text-muted" name="password" id="password" component="div" />
                                </div>
                            </div>
    

                            <div className="pt-1 mb-4">
                                <button className="btn btn-dark btn-lg btn-block" type="submit" disabled={isSubmitting}>Login</button>
                            </div>
                            <p className="mb-5 pb-lg-2" style={{color:"#393f81"}}>Don't have an account? <button
                                style={{color:"black",border:"none",backgroundColor:"white"}}><Link to='/Register' style={{textDecoration:"none",color:"black"}}>Register Here</Link></button></p>
                            </Form>
                        )}
                        </Formik>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
}
