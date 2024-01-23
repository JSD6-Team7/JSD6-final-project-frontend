import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";

const ProgressChartBar = () => {
  const data = [
    {
      type: "field1",
      sales: 38,
    },
    {
      type: "field2",
      sales: 52,
    },
    {
      type: "field3",
      sales: 61,
    },
    {
      type: "field4",
      sales: 145,
    },
    {
      type: "field5",
      sales: 48,
    },
    {
      type: "field6",
      sales: 38,
    },
    {
      type: "field7",
      sales: 38,
    },
    {
      type: "field8",
      sales: 52,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // label position
      position: "top",
      // 'top', 'bottom', 'middle',
      // style
      columnWidthRatio: 1,
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "type",
      },
      sales: {
        alias: "sales",
      },
    },
  };
  return <Column {...config} />;
};

export default ProgressChartBar;
