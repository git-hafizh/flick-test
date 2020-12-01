import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import * as FaIcons from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import dummy from '../data.json';
import './Dashboard.css';
import { Close, User } from '../assetsImg';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const [pending, setPending] = React.useState(true);
  const [rows, setRows] = React.useState([]);

  const showSidebar = () => setSidebar(!sidebar);

  const customStyles = {
    header: {
      style: {
        minHeight: '56px',
      },
    },
    headCells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: "#c8c8c8",
        },
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'solid',
          borderRightWidth: '1px',
          borderRightColor: "#c8c8c8",
        },
      },
    },
  };

  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

  const Spinner = styled.div`
  margin: 16px;
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

  const CustomLoader = () => (
    <div style={{ padding: '24px' }}>
      <Spinner />
      <div>Loading data...</div>
    </div>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(dummy);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <span className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars style={{ color: "#eb414f" }} onClick={showSidebar} />
        </Link>
      </span>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <img className="close-btn" src={Close} alt="close" onClick={showSidebar} />
            </Link>
          </li>
          <div className="user-profil">
            <img className="user-pic" src={User} alt="user" />
            <ul className="user-info">
              <li className="user-name">Ahmad Cantoso</li>
              <li className="user-email">cantoso@gmail.com</li>
              <li className="logout">
                <a href="/" alt="">Keluar</a>
              </li>
            </ul>
          </div>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="icon-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className={sidebar ? "main-dashboard" : "main-dashboard active"}>
        <div className="dashboard-text">
          Dashboard<br />
          <span className="greet-user">Halo, Ahmad</span>
        </div>
        <Row style={{ marginTop: "40px" }}>
          <Col md={3}>
            <div className="rect">
              Masa Berlaku Langganan<br />
              <span className="make-bold">15 Juli 2020</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="rect">
              Total Produk<br />
              <span className="make-bold">500</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="rect">
              Produk Terjual<br />
              <span className="make-bold">1000</span>
            </div>
          </Col>
          <Col md={3}>
            <div className="rect">
              Total Keuntungan<br />
              <span className="make-bold">15.000.000</span>
            </div>
          </Col>
        </Row>
        <div className="data-product">
          <span className="today">Penjualan Hari Ini</span><br />
          <span className="today-date">Kamis, 13 Agustus 2020</span>
          <DataTable
            data={rows}
            noHeader={true}
            responsive={true}
            progressPending={pending}
            progressComponent={<CustomLoader />}
            customStyles={customStyles}
            style={{ border: "1px solid #C8C8C8", marginTop: "20px", borderRadius: 0 }}
            columns={
              [
                {
                  name: 'Jam',
                  selector: 'jam',
                  sortable: false,
                },
                {
                  name: 'Customer',
                  selector: 'customer',
                  sortable: true,
                },
                {
                  name: 'Barang',
                  selector: 'barang',
                  sortable: false,
                },
                {
                  name: 'Harga Barang',
                  selector: 'harga_barang',
                  sortable: false,
                },
                {
                  name: 'Qty',
                  selector: 'qty',
                  sortable: true,
                },
                {
                  name: 'Total',
                  selector: 'total',
                  sortable: false,
                },
                {
                  name: '',
                  selector: '',
                  sortable: true,
                  cell: () => (
                    <Button style={{ padding: "2px 0px", fontWeight: "normal", fontSize: "12px" }}>
                      Lihat Detail
                    </Button>
                  )
                },
              ]}
            pagination={false}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
