import React from "react";
import { Card, Col, Row } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardKwh() {
  const [realtime, setRealtime] = useState([]);
  //mengambil data realtime dari sensor
  useEffect(() => {
    const getRealtime = async () => {
      const result = await axios.get("http://10.14.51.17:5000/mc57s");
      setRealtime(result.data);
    };

    // Memanggil getReports setiap 1 detik
    const intervalId = setInterval(() => {
      getRealtime();
    }, 500);

    // Membersihkan interval ketika komponen unmount
    return () => clearInterval(intervalId);
  }, []); // Menambahkan array dependensi kosong

  return (
    <div>
      <Row>
        <Col span={16}>
          <Card
            style={{
              marginTop: 10,
            }}
          >
            <div className="row align-items-center">
              <div className="col">
                <p className="text-center fs-5 text-secondary">ENERGY</p>
                {realtime
                  .filter(({ id }) => id === 1)
                  .map((item) => (
                    <p
                      className="text-center fs-1 fw-bolder text-secondary"
                      key={item.id}
                    >
                      {item.e_del} <span className="fs-5 fw-bolder">kwh</span>
                    </p>
                  ))}
              </div>
              <div className="col">
                <p className="text-center fs-5 text-secondary">FREQUENCY</p>
                <p className="text-center fs-1 fw-bolder text-secondary">
                  50 <span className="fs-5 fw-bolder">Hz</span>
                </p>
              </div>
              <div className="col">
                <p className="text-center fs-5 text-secondary">POWER FACTOR</p>
                <p className="text-center fs-1 fw-bolder text-secondary">
                  1 <span className="fs-5 fw-bolder"></span>
                </p>
              </div>
            </div>
          </Card>
          <Card
            style={{
              width: "100%",
              marginTop: 10,
            }}
          >
            <div className="row align-items-center">
              <div className="col">
                <p className="text-center fs-5 text-secondary ">POWER</p>
                {realtime
                  .filter(({ id }) => id === 1)
                  .map((item) => (
                    <p
                      className="text-center fs-1 fw-bolder text-secondary"
                      key={item.id}
                    >
                      {item.ptot} <span className="fs-5 fw-bolder">kw</span>
                    </p>
                  ))}
              </div>
              <div className="col">
                <p className="text-center fs-5 text-secondary">
                  VOLTAGE UNBALANCE
                </p>
                <p className="text-center fs-1 fw-bolder text-secondary">
                  4.5 <span className="fs-5 fw-bolder">%</span>
                </p>
              </div>
              <div className="col">
                <p className="text-center fs-5 text-secondary">
                  CURRENT UNBALANCE
                </p>
                <p className="text-center fs-1 fw-bolder text-secondary">
                  5.1 <span className="fs-5 fw-bolder">%</span>
                </p>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            style={{
              marginTop: 10,
              marginLeft: 10,
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className=" ">
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <p className=" fs-4 fw-bolder text-secondary" key={item.id}>
                    <span className="fs-4">Voltage Average = </span>
                    {item.v_avg} <span className="fs-4 fw-bolder">V</span>
                  </p>
                ))}
            </div>
          </Card>
          <Card
            style={{
              marginTop: 10,
              marginLeft: 10,
              borderLeft: "5px solid #2986cc",
            }}
          >
            <div className=" ">
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <p className=" fs-4 fw-bolder text-secondary" key={item.id}>
                    <span className="fs-4">Current Average = </span>
                    {item.i_avg} <span className="fs-4 fw-bolder">A</span>
                  </p>
                ))}
            </div>
          </Card>
          <Card
            style={{
              marginTop: 20,
              marginLeft: 10,
              border: "4px solid #2986cc",
            }}
          >
            <div className=" ">
              <p className=" fs-4 fw-bolder text-secondary">
                <span className="fs-3">SDB SECTOR HPDC </span>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
