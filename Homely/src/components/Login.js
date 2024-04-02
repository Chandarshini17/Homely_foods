import React from 'react';
import { Link } from 'react-router-dom';
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
                <center>Login</center>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" />
                  </div>
                  <br />
                  <center>
                    <Link to="/sections">
                      <button type="submit" style={{ backgroundColor: "orange" }}>
                        Login
                      </button>
                    </Link>
                  </center>
                  <div className="form-group">
                    <center>
                      <Link to="/" className="forgot-password-link">
                        Forgot Password?
                      </Link>
                    </center>
                  </div>
                  <br />
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

