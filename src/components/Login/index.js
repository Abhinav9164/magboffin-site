import React, { Component } from "react";
import { USER_LOGIN } from "../../context/types"
import { DataContext } from "../../context/reducer"

class index extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  static contextType = DataContext

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const [state, dispatch] = this.context;
    const { username, password } = this.state;
    dispatch({
      type: USER_LOGIN,
      payload: {
        username: username,
        password: password
      },
      dispatch: dispatch,
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row row-gap">
          <div className="col-12">
            <div className="login" id="login">
              <div className="head">
                <h1 className="logo02">Magboffin</h1>
              </div>
              <p className="msg">Welcome back</p>
              <div className="form">
                <form>
                  <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    className="text"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="••••••••••••••"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="password"
                  />
                  <br />
                  <a className="btn-login" id="do-login" style={{ cursor: "pointer" }} onClick={this.handleSubmit} >
                    Login
                  </a>
                  <a href="#" className="forgot">
                    Forgot Password?
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index