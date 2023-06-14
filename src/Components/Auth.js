import '../Styles/Auth.css'
import React from "react";

const Auth = () => {
    return (

        <div className="container flex authContainer">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card py-3 px-2">
                        <p className="text-center mb-3 mt-2">Log In</p>
                        <div className="row mx-auto ">
                            <div className="col-4">
                                <i className="fab fa-google"></i>
                            </div>
                        </div>
                        <div className="division">
                            <hr/>
                            <div className="row">
                                <div className="col-12 text-center" style={{marginBottom: "10px"}}>
                                    <span>Or with Email:</span></div>
                            </div>
                        </div>
                        <form className="myform">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email"></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="passwordCheckBox"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="button" className="btn btn-primary btn"><small>
                                    <i className="far fa-user pr-2"></i> Log In</small></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Auth