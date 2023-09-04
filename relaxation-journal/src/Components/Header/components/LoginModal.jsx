import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Axios from 'axios';

const LoginModal = ({ show, setShow, handleClose }) => {
  let login = {
    username: "",
    password: ""
  }

  const addEntry = () => {
    Axios.post("https://relaxationjournalapi.onrender.com/api/user/login", {
      ...login
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

  const loginUser = () => {
    addEntry()
    handleClose()
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title className='modal-title'>Log In</Modal.Title>
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
                onChange={(e) => login.username = e.target.value}
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
                onChange={(e) => login.password = e.target.value}
                autoComplete='false'
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={loginUser}>
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default LoginModal