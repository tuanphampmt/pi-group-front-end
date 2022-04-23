import React from "react";
import { Link } from "react-router-dom";

function LoginFormComponent(props) {
  const {} = props;

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
                  <h2>Đăng nhập</h2>
                  <p className="mb-4">
                    Để thi thử các em cần phải đăng nhập vào website của Nhóm Pi.
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username">Email hoặc Username</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="form-group last mb-4">
                    <label htmlFor="password">Mật khẩu</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <span className="mr-auto">
                      <Link to="/register" className="forgot-pass">
                        Đăng ký tài khoản
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
                    value="Đăng nhập"
                    className="btn btn-block btn-primary"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormComponent;
