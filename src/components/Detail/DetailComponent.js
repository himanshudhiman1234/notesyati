import React from 'react'

const DetailComponent = () => {
    return (
        <div>
              <section className="starting">
    <div className="container-fluid ms-0 me-0">
    <div className="row" style={{height: '100vh'}}>
        <div className="col-lg-5 starting-bg pe-0 d-flex align-items-center justify-content-center py-4 py-lg-0"
          style={{backgroundImage: `url(assets/images/background/01.jpg)`}}>
          <div className="starting-left">
            <img src="assets/images/logo/logo.png" alt="Logo" className="img-fluid mx-auto d-block" />
            <div className="starting-left-text">
              <h6 className="text-center lead text-secondary">Keep youself manged and</h6>
              <h6 className="text-center lead text-secondary mb-0">organized</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-7 starting-right sub-pages">
          <div className="starting-right-content">
            <h2 className="text-primary text-center">Complete Profile.</h2>
            <p className="normal-heading mx-auto text-center">
              You email is verified, complete your profile by adding a username and phone number (optional)
            </p>
            <div className="signup-form">
              <form>
                <div className="mb-35">
                  <input type="text" className="form-control custom-input" placeholder="Username" />
                </div>
                <div className="mb-35">
                  <input type="text" className="form-control custom-input" placeholder="Mobile no (optional)" />
                </div>
                <div className="mb-35">
                  <input type="password" className="form-control custom-input" placeholder="Password" />
                </div>
                <div className="mb-35">
                  <input type="password" className="form-control custom-input" placeholder="Confirm Password" />
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input custom-checkbox" id="check" />
                  <label className="form-check-label text-primary fw-500" for="check"
                   style=
                   {{
                       maxWidth:' 345px',
                       lineHeight: '29px'
                    }} 
                       >I agree to platform’s <span className="text-info">Terms of
                      service</span> and <span className="text-info">Privacy policy</span></label>
                </div>
                <div className="d-flex justify-content-end mt-5 submit-area">
                  <button type="submit" className="btn-submit">Continue</button>
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

export default DetailComponent
