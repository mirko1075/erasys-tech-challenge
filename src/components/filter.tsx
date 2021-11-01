import React, { useState } from "react";
import { formatRole } from "../helpers/helpers";

interface Filter {}

export default function Filter({
  filterFields,
  setFilterFields,
  setShowFilter,
}: any) {
  const [roles, setRoles] = useState([
    "VERSATILE",
    "TOP_ONLY",
    "BOTTOM_ONLY",
    "MORE_TOP",
    "MORE_BOTTOM",
  ]);

  const [filterArr, setfilterArr] = useState<[string, number][]>([
    ...filterFields,
  ]);
  const handleFilterFields = async (e: any) => {
    console.log("el :>> ", e.target.checked);

    let tempArr = filterArr ? [...filterArr] : [];
    if (e.target.name === "anal_position" || e.target.name === "online") {
      if (
        e.target.checked &&
        !tempArr.find(
          (el) => el[0] === e.target.name && el[1] === e.target.value
        )
      )
        tempArr.push([e.target.name, e.target.value]);
      if (
        !e.target.checked &&
        tempArr.find(
          (el) => el[0] === e.target.name && el[1] === e.target.value
        )
      )
        tempArr = tempArr.filter(
          (el) => el[0] !== e.target.name && el[1] !== e.target.value
        );
    } else {
      tempArr = tempArr.filter((el) => el[0] !== e.target.name);
      tempArr.push([e.target.name, e.target.value]);
    }
    console.log("tempArr :>> ", tempArr);
    await setfilterArr(tempArr);
  };

  const applyFilter = async () => {
    await setShowFilter(false);
    await setFilterFields([...filterArr]);
  };

  const resetFilter = async () => {
    await setFilterFields([]);
  };

  const checkIfFilterSelected = (field: any, value: any): boolean => {
    console.log(`filterArr`, filterArr);
    const idx = filterArr.findIndex((el) => {
      console.log("el :>> ", el);
      return el[0] === field && el[1] === value;
    });
    return idx !== -1;
  };
  return (
    <div
      onClick={() => {
        setShowFilter(false);
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        opacity: "0,5",
        zIndex: 2,
        border: "1px solid blue",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "30%",
          width: "70%",
          backgroundColor: "grey",
          zIndex: 5,
        }}
      >
        <div style={{ width: "100%", textAlign: "center" }}>Filter</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <div className="textMedium">ONLINE</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30px",
                fontSize: "16px",
              }}
            >
              <div className="tinyText">YES</div>
              <input
                onChange={(e) => handleFilterFields(e)}
                type="checkbox"
                name="online_status"
                id="online"
                value={"ONLINE"}
                checked={checkIfFilterSelected("online_status", "ONLINE")}
              />
            </div>
          </div>
          <div>
            <div className="textMedium">Role</div>
            {roles.map((role, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "30px",
                  fontSize: "16px",
                }}
              >
                <div className="tinyText">{formatRole(role)}</div>
                <input
                  key={role}
                  onChange={(e) => handleFilterFields(e)}
                  type="checkbox"
                  name="anal_position"
                  id={role}
                  value={role}
                  checked={checkIfFilterSelected("anal_position", { role })}
                />
              </div>
            ))}
          </div>
          <div>
            <div className="textMedium">SM</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30px",
                fontSize: "16px",
              }}
            >
              <div className="tinyText">YES</div>
              <input
                onChange={(e) => handleFilterFields(e)}
                type="radio"
                name="sm"
                id="sm"
                value={"YES"}
                checked={checkIfFilterSelected("sm", "YES")}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30px",
                fontSize: "16px",
              }}
            >
              <div className="tinyText">NO</div>
              <input
                onChange={(e) => handleFilterFields(e)}
                type="radio"
                name="sm"
                id="sm"
                value={"NO"}
                checked={checkIfFilterSelected("sm", "NO")}
              />
            </div>
          </div>
          <div>
            <div className="textMedium">SMOKER</div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30px",
                fontSize: "16px",
              }}
            >
              <div className="tinyText">YES</div>
              <input
                onChange={(e) => handleFilterFields(e)}
                type="radio"
                name="smoker"
                id="smoker"
                value={"YES"}
                checked={checkIfFilterSelected("smoker", "YES")}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30px",
                fontSize: "16px",
              }}
            >
              <div className="tinyText">NO</div>
              <input
                onChange={(e) => handleFilterFields(e)}
                type="radio"
                name="smoker"
                id="smoker"
                value={"NO"}
                checked={checkIfFilterSelected("smoker", "NO")}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "150px", textAlign: "center", cursor: "pointer" }}
          >
            <button onClick={applyFilter}>Apply</button>
          </div>
          <div
            style={{ width: "150px", textAlign: "center", cursor: "pointer" }}
          >
            <button className="filterBtn" onClick={resetFilter}>
              reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
