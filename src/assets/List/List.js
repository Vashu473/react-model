import React, { useState } from "react";
import "../../components/dashboard/style.css";
const List = ({ data = [], header = [] }) => {
  const [pagination, setPagination] = useState({
    start: 0,
    end: 16,
    limit: 16,
  });
  const { start, end, limit } = pagination;
  const handlePagination = (dataa) => {
    if (dataa == "next") {
      return setPagination((prev) => {
        return {
          ...prev,
          start: end < data?.length ? start + limit : start,
          end: end < data?.length ? end + limit : end,
        };
      });
    } else {
      return setPagination((prev) => {
        return {
          ...prev,
          start: start == 0 ? start : start - limit,
          end: end == 16 ? end : end - limit,
        };
      });
    }
  };
  return (
    <div style={{ width: "100%" }}>
      <table>
        <thead>
          <tr>
            {header.map((data, index) => {
              return <th key={index}> {data.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.slice(start, end)?.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data?.gameName}</td>
                <td>{data?.period}</td>
                <td>{data?.select}</td>
                <td>{data?.delivery}</td>
                <td>{data?.amount}</td>
                <td>{data?.winCharge || 0}</td>
                <td>{data?.fee || "1:2"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ul
        style={{
          width: "20%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <li className="pagination" onClick={() => handlePagination("")}>
          Previous
        </li>
        <li className="pagination" onClick={() => handlePagination("next")}>
          Next
        </li>
      </ul>
    </div>
  );
};

export default List;
