import React from "react";
import { Input, Select, Space } from "antd";

export default function SearchBar() {
  const options = [
    {
      value: "firstName",
      label: "First Name",
    },
    {
      value: "lastName",
      label: "Last Name",
    },
    {
      value: "patientID",
      label: "Patient ID",
    },
  ];
  return (
    <Space.Compact>
      <Select defaultValue="firstName" options={options} />
      <Input allowClear={true} placeholder="Enter your search here" />
    </Space.Compact>
  );
}
