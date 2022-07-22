import React, { useEffect, useState } from "react";
import { getFetch } from "../../api/api";
import List from "../../assets/List/List";
import { BID } from "../../constants/constants";

const Bid = () => {
  useEffect(() => {
    callData();
  }, []);
  const callData = async () => {
    const res = await getFetch(BID);
    setData(res?.message);
  };
  const [data, setData] = useState([]);
  const header = [
    { name: "Game" },
    { name: "Period" },
    { name: "Select" },
    { name: "Delivery" },
    { name: "Amount" },
    { name: "Charge" },
    { name: "Fee" },
  ];

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        overflowY: "scroll",
        backgroundColor: "#000000",
      }}
    >
      <List data={data} header={header} />
    </div>
  );
};

export default Bid;
