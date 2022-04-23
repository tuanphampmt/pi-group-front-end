import React from "react";
import { Link } from "react-router-dom";

function ForgotPasswordFormComponent(props) {
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
                  <h2>Lấy lại mật khẩu</h2>
                  <p className="mb-4">
                    Để lấy lại mật khẩu các em cần phải điền Email của mình.
                  </p>
                </div>
                <form action="#" method="post">
                  <div className="form-group first mb-4 last">
                    <label htmlFor="username">Email</label>
                    <input type="text" className="form-control" id="username" />
                  </div>
                  <div className="d-flex mb-5 align-items-center">
                    <span className="mr-auto">
                      <Link to="/login" className="forgot-pass">
                        Đăng nhập
                      </Link>
                    </span>
                    <span className="ml-auto">
                      <Link to="/register" className="forgot-pass">
                        Đăng ký tài khoản
                      </Link>
                    </span>
                  </div>
                  <input
                    type="submit"
                    value="Gửi"
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

export default ForgotPasswordFormComponent;
