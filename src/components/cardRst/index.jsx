import React from "react";
import { Card, Col, Row, Progress } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardRst() {
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
      <Card style={{ width: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Row justify="center">
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.v_1 / 400) * 100}
                    format={(percent) => `${Math.round(percent * 4)} V`}
                  />
                ))}
            </Col>
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.v_2 / 400) * 100}
                    format={(percent) => `${Math.round(percent * 4)} V`}
                  />
                ))}
            </Col>
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.v_3 / 400) * 100}
                    format={(percent) => `${Math.round(percent * 4)} V`}
                  />
                ))}
            </Col>
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.i_1 / 100) * 100}
                    format={(percent) => `${percent} A`}
                  />
                ))}
            </Col>
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.i_2 / 100) * 100}
                    format={(percent) => `${percent} A`}
                  />
                ))}
            </Col>
            <Col span={4}>
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <Progress
                    type="circle"
                    key={item.id}
                    percent={(item.i_3 / 100) * 100}
                    format={(percent) => `${percent} A`}
                  />
                ))}
            </Col>
          </Row>
          <br />
          <Row justify="center">
            <Col span={4}>V R-S</Col>
            <Col span={4}>V S-T</Col>
            <Col span={4}>V R-T</Col>
            <Col span={4}>I - R</Col>
            <Col span={4}>I - S</Col>
            <Col span={4}>I - T</Col>
          </Row>
        </div>
      </Card>
    </div>
  );
}
