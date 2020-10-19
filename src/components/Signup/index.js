import React, { Component } from "react";
import { REG_USER } from "../../context/types"
import { DataContext } from "../../context/reducer"

class index extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      username: "",
      password1: "",
      password2: ""
    }
  }


  static contextType = DataContext

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    alert("reg")
    const [state, dispatch] = this.context;
    const { email, username, password1, password2 } = this.state;
    dispatch({
      type: REG_USER,
      payload: {
        email: email,
        username: username,
        password1: password1,
        password2: password2
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
                    name="email"
                    className="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    placeholder="abc@gmail.com"
                    id="email"
                    required
                  />
                  <br />
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
                    name="password1"
                    id="password"
                    type="password"
                    placeholder="••••••••••••••"
                    value={this.state.password1}
                    onChange={this.handleChange}
                    className="password"
                    required
                  />
                  <br />
                  <input
                    name="password2"
                    id="password"
                    type="password"
                    placeholder="••••••••••••••"
                    value={this.state.password2}
                    onChange={this.handleChange}
                    className="password"
                    required
                  />
                  <br />
                  <a className="btn-signup" id="do-signup" style={{ cursor: "pointer" }} onClick={this.handleSubmit}>
                    Sign Up
                  </a>
                  <a href="#" className="forgot"></a>
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