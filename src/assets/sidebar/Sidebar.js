import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth";
const Sidebar = () => {
  const { outToken } = useContext(AuthContext);
  let sideArray = [
    { name: "Dashboard", url: "/" },
    { name: "Profile", url: "/" },
    { name: "Bids", url: "/bid" },
    { name: "Winners", url: "/winner" },
  ];
  const [active, setActive] = useState(0);
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
      style={{ width: "280px", height: "100vh" }}
    >
      <h1 className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span
          className="fs-4"
          style={{ color: "#0d6efd", fontFamily: "fantasy", fontWeight: "700" }}
        >
          Way To Win
        </span>
      </h1>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {sideArray.map((data, index) => {
          return (
            <NavLink
              to={data.url}
              key={index}
              className={active == index ? "nav-link active" : ""}
              aria-current="page"
              style={{
                margin: "5px 0px",
                borderBottom: "1px solid white",
                paddingBottom: "5px",
                textDecoration: "none",
              }}
            >
              <li
                className="nav-item"
                onClick={() => setActive(index)}
                style={{
                  color: "#ffffff",
                }}
              >
                {data.name}
              </li>
            </NavLink>
          );
        })}
        <NavLink
          onClick={() => outToken()}
          to="/"
          style={{
            margin: "5px 0px",
            borderBottom: "1px solid white",
            paddingBottom: "5px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <li className="nav-item" style={{ color: "#ffffff" }}>
            Sign Out
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
