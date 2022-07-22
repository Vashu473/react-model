import React, { useEffect, useState } from "react";
import "./style.css";
import { getFetch, postFetch, postFetchById } from "../../api/api";
import { config, GAMELIST, UPDATE } from "../../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  useEffect(() => {
    callData();
  }, []);
  const callData = async () => {
    const res = await getFetch(GAMELIST);
    setData(res?.message);
  };
  const [input, setInput] = useState({});
  const [id, setId] = useState({
    _id: "",
    current: 0,
    timer: 0,
  });
  const [data, setData] = useState([]);
  const updateData = async () => {
    let delay = (parseInt(id.timer) - parseInt(id.current) - 2) * 1000;
    setTimeout(async () => {
      await postFetch(UPDATE, input);
    }, delay);
    toast.info(`Data will update in withitn ${id.timer} sec`, config);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const header = [
    { name: "Name" },
    { name: "Active" },
    { name: "Period" },
    { name: "Lock" },
    { name: "Timer" },
    { name: "Charge" },
    { name: "Number Bid" },
    // { name: "Box Bid" },
    // { name: "Image Bid" },
  ];
  return (
    <div
      style={{ width: "100%", maxHeight: "100vh", backgroundColor: "#000000" }}
    >
      <ToastContainer />
      <table>
        <thead>
          <tr>
            {header.map((data, index) => {
              return <th key={index}> {data.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((data, index) => {
            return (
              <tr
                key={index}
                onClick={() => {
                  setInput({ Code: data?.Code });
                  setId({
                    _id: data?._id,
                    current: data?.currentTimer,
                    timer: data?.timer,
                  });
                }}
              >
                <td>
                  <input
                    type="text"
                    name="name"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.name}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="isActive"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.isActive}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="period"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.period}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="lock"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.lock}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="timer"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.timer}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="winCharge"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.winCharge || 0}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="numBid"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.numBid?.slice(2) || "2"}
                  />
                </td>
                {/* <td>
                  <input
                    type="text"
                    name="boxBid"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.boxBid || "1:2"}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="imgBid"
                    id=""
                    autoComplete="off"
                    autoCorrect="off"
                    onChange={handleChange}
                    placeholder={data?.imgBid || "1:2"}
                  />
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={updateData}>Submit</button>
    </div>
  );
};

export default Dashboard;
