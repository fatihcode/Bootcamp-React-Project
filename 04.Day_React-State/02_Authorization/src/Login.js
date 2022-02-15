import React from 'react';


class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      authorized: false,
      counter: 3
    }
  }


  checkAuthorize = () => {

    const input = document.querySelector(".form-control")
    const button = document.querySelector(".btn")

    if (this.props.user.password === input.value) {

      this.setState({ authorized: true })

    } else {

      alert("Yanlış Giriş yaptınız")

      this.setState({ counter: this.state.counter - 1 })

      if (this.state.counter === 0) {

        input.disabled = true
        button.disabled = true

        this.enableInput()

      }
    }
  }


  enableInput = () => {
    alert("Lütfen Bekleyiniz...")

    setTimeout(() => {
      document.querySelector(".form-control").disabled = false
      document.querySelector(".btn").disabled = false
      this.setState({ counter: 3 })
    }, 5000);
  }


  render() {

    let contact = (
      <div className="card">
        <div className="top">
          <h3 className="name">{this.props.user.name}</h3>
          <img className="circle-img" src={this.props.user.imgURL} alt="" />
        </div>
        <div className="bottom">
          <p>{this.props.user.mail} </p>
          <p>{this.props.user.phone} </p>
        </div>
      </div>
    )

    let login = (
      <div className="card">
        <form className="form-inline" action="#" onSubmit={this.checkAuthorize}>
          <div className="form-group">
            <div>
              <input type="password" className="form-control mx-sm-3" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );


    return (
      <div id="authorization">
        <h1>Enter the Password</h1>
        {this.state.authorized ? contact : login}

      </div>
    )
  }
}


export default Login;