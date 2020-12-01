import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import Modal from "react-modal";
import { Link } from 'react-scroll'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Close, Heroku, Login } from '../../assetsImg';

const LandingPage = () => {
  const [modal, setModal] = useState(false);
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange'
  });
  const history = useHistory();

  const onSubmit = (values) => {
    console.log(values);
  }

  function Submitted() {
    toast.success("Account has been successfully created");
    setTimeout(() => {
      history.push('/dashboard')
    }, 3000);
  }

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <Row style={{ textAlign: "left" }}>
        <Col md={6}>
          <div className="body-text">
            Solusi terbaik untuk<br /> <span className="bold-nunito">mengelola usaha</span><br /> kamu!
          <br />
            <Button onClick={toggle}>Daftar Sekarang</Button><br />
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
                  <img className="heroku-register" src={Login} alt="" />
                </Col>
                <Col md={6}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="make-account">Buat Akun</p>
                    <input className="account name" placeholder="Nama" name="name" type="text" required
                      ref={register({
                        required: true,
                        pattern: {
                          value: /^[\w\-\s]+$/,
                          message: "Entered value does not match name format"
                        }
                      })}
                    />
                    {errors.name && <span className="error-msg-red">{errors.name.message}</span>}
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

                      <Button type="submit" onClick={Submitted} className="btn-register" disabled={errors.email || errors.password || errors.name ? true : false}>
                        Daftar
                      </Button>
                  </form>
                  <p style={{ textAlign: "center" }} className="user-text">Sudah punya akun? <a href="/">Masuk</a></p>
                </Col>
              </Row>
            </Modal>
            <Link activeClass="active" to="subscription" spy={true} smooth={true} offset={-100} duration={500} delay={300}>
              <Button variant="secondary">Pelajari Dulu!</Button>
            </Link>
          </div>
        </Col>
        <Col md={6}>
          <div className="heroku-img">
            <img src={Heroku} alt="heroku" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LandingPage
