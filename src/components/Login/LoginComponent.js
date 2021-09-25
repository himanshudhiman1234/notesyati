import React from 'react'
import { Link } from 'react-router-dom'

const LoginComponent = () => {

    return (
        <div>
             <section className="starting">
    <div className="container-fluid ms-0 me-0">
      <div className="row" style={{height: '100vh'}}>
        <div   style={{ backgroundImage : `url(assets/images/background/01.jpg)`}}
        className="col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0"
         >
          <div className="starting-left">
            <img src="assets/images/logo/logo.png" alt="Logo" className="img-fluid mx-auto d-block" />
            <div className="starting-left-text">
              <h6 className="text-center lead text-secondary">Keep youself manged and</h6>
              <h6 className="text-center lead text-secondary mb-0">organized</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-7 starting-right">
          <div className="starting-right-content">
            <h2 className="text-primary text-center">Log In.</h2>
            <p className="text-primary sub-heading mb-0 text-center">Don’t have an account? <Link to="/signup" className="text-info">Signup</Link>
            </p>
            <div className="signup-form reg-info">
              <form>
                <div className="mb-35">
                  <input type="text" className="form-control custom-input" placeholder="Email/Username" />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control custom-input" placeholder="Password" />
                  <div className="mt-2 mt-lg-3 text-end me-4"><Link to="/forgetPassword" className="form-text text-info">Forgot password?</Link></div>
                </div>

                <div className="mb-4 form-check ">
                  <div className="d-flex align-items-center">
                    <input type="checkbox" className="form-check-input custom-checkbox" id="check" />
                    <label
                    className="form-check-label text-primary fw-500"  for="check"
                      >Keep me signed in</label>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn-submit">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default LoginComponent
