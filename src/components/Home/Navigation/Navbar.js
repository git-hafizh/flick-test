import React, { useState } from 'react'
import { MenuItems } from "./MenuItems"
import { Link } from 'react-scroll';
import { useForm } from 'react-hook-form';
import { Button, Col, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { Close, Login } from '../../assetsImg';
import Modal from "react-modal";
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [header, setHeader] = useState(false);
  const [modal, setModal] = useState(false);
  const { handleSubmit, register, errors, formState } = useForm({
    mode: 'onChange'
  });
  const history = useHistory()

  const onSubmit = (values) => {
    console.log(values);
  }

  const handleClick = () => setClicked(!clicked)

  const toggle = () => setModal(!modal);

  const changeBg = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeBg);


  function Submitted(){
    toast.success("Successfully Login!");
    setTimeout(() => {
      history.push('/dashboard')
    }, 3000);
  }

  

  return (
    <div className={header ? "NavbarItems active" : "NavbarItems"}>
      <h1 className="navbar-logo">xyz<b>POS</b></h1>
      <div className="menu-icon" onClick={handleClick}>
        <i style={{ color: "#000" }} className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-list active' : 'nav-list'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link activeClass="active" to={item.url} spy={true} smooth={true} offset={-100} duration={500} delay={300}>
                <span className={header ? "icon-title active" : "icon-title"}>{item.title}</span>
              </Link>
            </li>
          );
        })}
        <Button onClick={toggle} className={header ? "masuk-active" : "masuk"}>
          Masuk
          </Button>
        <Modal
          isOpen={modal}
          onRequestClose={toggle}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <img style={{ width: "24px", position: "relative", float: "right", cursor: "pointer" }} onClick={toggle} src={Close} alt="" />
          <Row>
            <Col md={6}>
              <img className="heroku-login" src={Login} alt="" />
            </Col>
            <Col md={6}>
              <p className="login-account">Masuk</p>
              <form onSubmit={handleSubmit(onSubmit)}>
              <input className="account email" placeholder="Email" name="email" required
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Entered value does not match email format"
                        }
                      })}
                    />
                    {errors.email && <span className="error-msg-red">{errors.email.message}</span>}
                    <input className="account pass" placeholder="Password" name="password" type="password" required
                      ref={register({
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                      })}
                    />
                    {errors.password && errors.password.type === "minLength" && <span className="error-msg">Minimum 8 characters</span>}
                    {errors.password && errors.password.type === "maxLength" && <span className="error-msg-red">Maximum length exceeded</span>}
                <div className="rememmber-me">
                  <label class="b-contain">
                    <span>Ingat saya ?</span>
                    <input type="checkbox" />
                    <div class="b-input"></div>
                  </label>
                </div>
                <Button onClick={Submitted} type="submit" className="btn-login" disabled={!formState.isValid}>Masuk</Button>
              </form>
              <p style={{ textAlign: "center" }} className="user-text">Belum punya akun?
              <Link activeClass="active" to="register-modal" spy={true} smooth={true} offset={-80} duration={500} delay={300}>
                  <span> <b>Daftar</b></span>
                </Link>
              </p>
            </Col>
          </Row>
        </Modal>
      </ul>
    </div>
  )
}

export default Navbar
