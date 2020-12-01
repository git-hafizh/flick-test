import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './Subscription.css'
import Modal from "react-modal";
import Login from '../../../assets/login-illustration.svg';
import Close from '../../../assets/close-24px.svg';
import { useForm } from 'react-hook-form';

const Berlangganan = () => {
  const [modal, setModal] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  }

  const toggle = () => setModal(!modal);

  return (
    <div id="subscription" className="subs-body">
      <p className="title">
        Daftar sekarang dan nikmati fiturnya!
          </p>
      <Row>
        <Col md={4}>
          <div className="rect-1" >
            <p className="the-feature">Basic</p>
            <p className="price">45.000
              <p className="perbulan">/bulan</p>
            </p>
            <span className="feature">
              <p>Kelola stok produk dengan mudah</p>
              <p>Laporan penjualan lengkap</p>
              <p>Jual produk digital</p>
            </span>
            <Button onClick={toggle} variant="success">Aku mau!</Button>
          </div>
        </Col>
        <Col md={4}>
          <div className="rect-1-best">
            <div className="best">Best Seller!</div>
            <div className="content">
              <p className="the-feature-best">Premium</p>
              <p className="price">50.000
                <p className="perbulan">/bulan</p>
              </p>
              <span className="feature">
                <p>Semua fitur pada paket Basic</p>
                <p>Dukungan printer struk</p>
                <p>Live support 24 jam</p>
              </span>
              <Button onClick={toggle} variant="success">Aku mau!</Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="rect-1">
            <p className="the-feature">Super POS!</p>
            <p className="price">70.000
              <p className="perbulan">/bulan</p>
            </p>
            <span className="feature">
              <p>Semua fitur pada paket Premium</p>
              <p>Laporan penjualan lengkap</p>
              <p>Jual produk digital</p>
            </span>
            <Button onClick={toggle} variant="success">Aku mau!</Button>
          </div>
        </Col>
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
              <img src={Login} alt="" />
            </Col>
            <Col md={6}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <p className="make-account">Buat Akun</p>
                <input className="account name" placeholder="Nama" type="text" />
                <input className="account email" placeholder="Email" type="email" name="email" />
                <input
                  className="account pass"
                  placeholder="Password"
                  name="password"
                  type="password"
                  ref={register({
                    required: true,
                    minLength: 8,
                    maxLength: 20,
                  })}
                />
                {errors.password && errors.password.type === "minLength" && <span className="error-msg">Minimum 8 characters</span>}
                {errors.password && errors.password.type === "maxLength" && <span className="error-msg-red">Maximum length exceeded</span>}
                <Button type="submit" className="btn-register">Daftar</Button>
              </form>
              <p style={{ textAlign: "center" }} className="user-text">Sudah punya akun? <a href="/">Masuk</a></p>
            </Col>
          </Row>
        </Modal>
      </Row>
    </div>
  )
}

export default Berlangganan
