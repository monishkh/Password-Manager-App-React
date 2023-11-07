import './App.css'

import {Component} from 'react'

import {v4} from 'uuid'

import WebItems from './component/WebItems'

class PasswordManager extends Component {
  state = {
    listOfWeb: [],
    webInput: '',
    userName: '',
    password: '',
    isFalse: false,
    count: 0,
    searchInput: '',
  }

  isShowOrNot = id => {
    const {listOfWeb} = this.state

    const filteredList = listOfWeb.filter(e => e.id !== id)

    this.setState({
      listOfWeb: filteredList,
    })

    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      isFalse: !prevState.isFalse,
    }))
  }

  onChangeWeb = event => {
    this.setState({
      webInput: event.target.value,
    })
  }

  onChangeUser = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePass = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onClickFrom = event => {
    event.preventDefault()
    const {listOfWeb, webInput, userName, password} = this.state

    const newWebOrPass = {
      id: v4(),
      web: webInput,
      user: userName,
      pass: password,
    }

    this.setState(prevState => ({
      listOfWeb: [...prevState.listOfWeb, newWebOrPass],
      webInput: '',
      userName: '',
      password: '',
    }))

    this.setState(prevState => ({count: prevState.count + 1}))

    console.log(listOfWeb)
  }

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    console.log(this.findWordListOfWeb)
    const {
      webInput,
      userName,
      password,
      isFalse,
      count,

      listOfWeb,
      searchInput,
    } = this.state

    const searchResult = listOfWeb.filter(eachSearch =>
      eachSearch.web.toLowerCase().includes(searchInput.toLowerCase()),
    )

    console.log(searchResult.length)

    return (
      <div className="password-manager-app">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="logo-img"
        />
        <div className="input-container">
          <div className="add-new-password">
            <h1 className="main-heading">Add New Password</h1>
            <form>
              <div className="web-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="img-0"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onChangeWeb}
                  value={webInput}
                />
              </div>
              <div className="web-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="img-0"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onChangeUser}
                  value={userName}
                />
              </div>
              <div className="web-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="img-0"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onChangePass}
                  value={password}
                />
              </div>
              <div
                style={{
                  marginTop: '15px',
                  width: '100%',
                  textAlign: 'end',
                }}
                className="btn-box"
              >
                <button
                  type="submit"
                  className="add-btn"
                  onClick={this.onClickFrom}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
            alt="password manager"
            className="img-1"
          />
        </div>
        <div className="result-container">
          <div className="search-container">
            <div className="count-box">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="web-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="img-2"
              />
              <input
                type="search"
                placeholder="search"
                className="search-bar"
                onChange={this.onChangeSearch}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              className="radio-input"
              onClick={this.onClickShowPassword}
            />
            <label htmlFor="showPassword">Show passwords</label>
          </div>
          <div className="result">
            {searchResult.length !== 0 ? (
              <ul>
                {searchResult.map(eachWeb => (
                  <WebItems
                    webDetails={eachWeb}
                    key={eachWeb.id}
                    isFalse={isFalse}
                    isShowOrNot={this.isShowOrNot}
                  />
                ))}
              </ul>
            ) : (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no"
                />
                <p>No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
