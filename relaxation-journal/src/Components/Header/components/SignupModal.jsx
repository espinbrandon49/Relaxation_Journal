import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

const SignupModal = ({ show, setShow, handleClose }) => {

  let signup = {
    username: "",
    password: ""
  };
  let confirmPassword = "";

  const addEntry = () => {
    Axios.post("https://relaxationjournalapi.onrender.com/api/user/signup", {
      ...signup
    })
  }

  const signupUser = () => {
    if (signup.password !== confirmPassword) {
      alert("passwords do not match")
      return
    }

    if (signup.password.split("").includes(" ")) {
      alert("password cannot contain spaces")
      return
    }

    if (signup.username.split("").includes(" ")) {
      alert("username cannot contain spaces")
      return
    }

    addEntry()
    loginEntry()
    handleClose();
  }

  const loginEntry = () => {
    Axios.post("https://relaxationjournalapi.onrender.com/api/user/login", {
      ...signup
    })
      .then((response) => {
        if (response.data.message === "login success") {
          localStorage.setItem('accessToken', response.data.user._id.concat("/" + Date.now()))
          window.location.reload()
        }

        if (response.data.message === "not registered") {
          alert("No user with that username is registered.  Sign Up to begin relaxing")
        }

        if (response.data.message === "wrong credentials") {
          alert("Wrong credentials")
        }
      })
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='modal-form'>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="form-input"
                onChange={(e) => signup.username = e.target.value}
                autoComplete='false'
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="text"
                id="password"
                placeholder="Enter Password"
                className="form-input"
                onChange={(e) => signup.password = e.target.value}
                autoComplete='false'
              />
            </div>
            <div>
              <label htmlFor="password2">Confirm Password</label>
              <input
                type="text"
                id="password2"
                placeholder="Enter Password Again"
                className="form-input"
                autoComplete='false'
                onChange={(e) => confirmPassword = e.target.value}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={signupUser}>
            Sign up
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SignupModal

