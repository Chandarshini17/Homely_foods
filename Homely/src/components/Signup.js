import React from 'react';
import Header1 from './Header/TheNavbar';
import Footer from './Footer/TheFooter';

export default function Login() {
  return (
    <div>
      <Header1 />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mt-4 bg-orange">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header bg-orange">
                <center>Register</center>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username">Email:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <br></br>
                  <center>
                    <button type="submit" className="btn btn-dark">
                      Sign up
                    </button>
                  </center>
                  <div className="form-group">
                    <center>
                      <p>Already Have an account?</p>
                      <a href="/" className="forgot-password-link">
                        Login
                      </a>
                    </center>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}