import React from 'react'
import { Link } from "react-router-dom";

function RegisterFormComponent(props) {
    const {} = props

    return (
        <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="images/undraw_remotely_2j6y.svg"
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3>Đăng ký tài khoản</h3>
                    <p className="mb-4">
                      Để đăng nhập vào website của Nhóm Pi các em cần phải đăng ký tài khoản.
                    </p>
                  </div>
                  <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Email hoặc Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Xác nhận mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  
                  <div className="d-flex mb-5 align-items-center">
                    <span className="mr-auto">
                      <Link to="/login" className="forgot-pass">
                        Đăng nhập
                      </Link>
                    </span>
                    <span className="ml-auto">
                      <Link to="/forgot-pass" className="forgot-pass">
                        Lấy lại mật khẩu
                      </Link>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Đăng ký"
                    className="btn btn-block btn-primary"
                  />
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

RegisterFormComponent.propTypes = {

}

export default RegisterFormComponent
