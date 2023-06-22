import React from "react";
import { Button, Space } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function ContentReport() {
  return (
    <div className="position-relative">
      <div
        className="position-absolute top-0 start-0 translate-middle fs-4"
        style={{ paddingLeft: "150px" }}
      >
        REPORT SDB
      </div>
      <div
        className="position-absolute top-0 start-100 translate-middle"
        style={{ paddingRight: "120px", paddingTop: "20px" }}
      >
        <Space>
          <Button type="primary" icon={<DownloadOutlined />}>
            DOWNLOAD
          </Button>
        </Space>
      </div>
    </div>
  );
}
