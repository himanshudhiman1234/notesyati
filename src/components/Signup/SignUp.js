import React from 'react'
import { Link } from 'react-router-dom'

const SignUpComponent = () => {
    return (
        <div>
  <section classNameName="starting">
    <div className="container-fluid ms-0 me-0">
      <div className="row" style={{height: "100vh"}}>
        <div className="col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0"
          style={{backgroundimage: `url(assets/images/background/01.jpg)`}}>
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
            <h2 className="text-primary text-center">Get Started.</h2>
            <p className="text-primary sub-heading mb-0 text-center">Already have an account? <Link to="/login" className="text-info">Login</Link>
            </p>
            <div className="signup-form reg-info">
              <form>
                <div className="mb-35">
                  <input type="email" className="form-control custom-input" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control custom-input" placeholder="OTP" />
                  <div className="mt-2 mt-lg-3 form-text text-info text-end me-4">Resend OTP in 00:53s</div>
                </div>

                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input custom-checkbox" id="check" />
                  <label className="form-check-label text-primary fw-500" for="check"
                    style={{maxWidth: '345px' , lineHeight: '29px'}}>I agree to platform’s <span className="text-info">Terms of
                      service</span> and <span className="text-info">Privacy policy</span></label>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn-submit">Register</button>
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

export default SignUpComponent
