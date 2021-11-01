import React, { useState, useEffect } from "react";
import Card from "./card";
import UserCard from "./userCard";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Filter from "./filter";
interface simpleUser {
  id: number;
  is_plus: boolean;
  last_login: Date;
  name: string;
  online_status: string;
  picture: picture;
}

interface picture {
  comment: string;
  url: string;
}

export default function UserCards(props: any) {
  const [usersArr, setUsersArr] = useState([]);
  const [usersArrBase, setUsersArrBase] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [userToShow, setUserToShow] = useState({});
  const [showFilter, setShowFilter] = useState(false);
  const [filterFields, setFilterFields] = useState([]);

  const testURL = "";

  useEffect(() => {
    getAllData();
  }, []);

  const getSingleUser = async (id: number) => {
    try {
      const myRequest = new Request(testURL + "/api/profiles?ids=" + id, {
        method: "GET",
        mode: "no-cors",
      });
      const response = await fetch(myRequest);
      if (response.ok) {
        let user = await response.json();
        return user;
      } else {
        alert("Error-HTTP: " + response.status);
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const getUsers = async (parameter: string) => {
    try {
      const myRequest = new Request(testURL + "/api/search?length=32", {
        method: "GET",
        mode: "no-cors",
      });
      const response = await fetch(myRequest);
      console.log("response :>> ", response.ok);
      if (response.ok) {
        console.log("response :>> ", response);
        let users = await response?.json();
        console.log("users from api :>> ", users);
        return users;
      } else {
        alert("Error-HTTP: " + response.status);
        return [];
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  const getAllData = async () => {
    const result = await getUsers("DISTANCE");
    const users = result.items;
    for (let i = 0; i < users.length; i++) {
      const details = await getSingleUser(users[i].id);
      users[i].details = details[0];
    }
    await setUsersArr(users);
    await setUsersArrBase(users);
    console.log("usersArr :>> ", usersArr);
  };

  const sortBy = async (parameter: string, order: string) => {
    const tempArr = [...usersArr];
    console.log("tempArr :>> ", tempArr);
    parameter === "DIST"
      ? order === "ASC"
        ? tempArr.sort(
            (a: any, b: any) =>
              b.details.location.distance - a.details.location.distance
          )
        : tempArr.sort(
            (a: any, b: any) =>
              a.details.location.distance - b.details.location.distance
          )
      : order === "ASC"
      ? tempArr.sort(
          (a: any, b: any) =>
            new Date(a.last_login).getTime() - new Date(b.last_login).getTime()
        )
      : tempArr.sort(
          (a: any, b: any) =>
            new Date(b.last_login).getTime() - new Date(a.last_login).getTime()
        );
    console.log("tempArr :>> ", tempArr);

    await setUsersArr(tempArr);
  };

  const filterData = () => {
    if (filterFields.length === 0) setUsersArr(usersArrBase);
    console.log("filterFields :>> ", filterFields);
    let filteredData: any = [];
    filterFields.forEach((filter) => {
      console.log(`filter`, filter);
      const tempArr = usersArr.filter((user) => {
        console.log("userFiltered", user["details"]);
        if (filter[0] === "anal_position")
          return user["details"]["sexual"][filter[0]] === filter[1];
        if (filter[0] === "sm")
          return user["details"]["sexual"][filter[0]] === filter[1];
        if (filter[0] === "anal_position")
          return user["details"]["sexual"][filter[0]] === filter[1];
        if (filter[0] === "smoker")
          return user["details"]["personal"][filter[0]] === filter[1];
        if (filter[0] === "online_status") return user[filter[0]] === filter[1];
      });
      console.log(`tempArr`, tempArr);
      filteredData = [...filteredData, ...tempArr];
    });
    console.log(`filteredData`, filteredData);
    setUsersArr(filteredData);
  };
  const resetFilter = () => {
    console.log(`usersArrBase`, usersArrBase);
    setUsersArr(usersArrBase);
  };
  useEffect(() => {
    if (!filterFields.length) {
      resetFilter();
      return;
    }
    filterData();
  }, [filterFields]);

  return (
    <div
      style={{
        flex: 1,
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C4C4C4",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <a onClick={() => sortBy("DIST", "ASC")}>
              Distance <ArrowDownwardIcon />
            </a>
          </div>
          <div>
            <a onClick={() => sortBy("DIST", "DESC")}>
              Distance <ArrowUpwardIcon />
            </a>
          </div>
          <div>
            <a onClick={() => sortBy("ACT", "ASC")}>
              Activity <ArrowUpwardIcon />
            </a>
          </div>
          <div>
            <a onClick={() => sortBy("ACT", "DESC")}>
              Activity <ArrowDownwardIcon />
            </a>
          </div>
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a onClick={() => setShowFilter(!showFilter)}>
              <FilterAltIcon />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          overflowY: "scroll",
          height: "600px",
        }}
      >
        {usersArr &&
          usersArr.map((user, i) => (
            <Card
              key={i}
              user={user}
              setUserToShow={setUserToShow}
              openCard={openCard}
              setOpenCard={setOpenCard}
              setShowFilter={setShowFilter}
            />
          ))}
        {openCard ? (
          <UserCard user={userToShow} setOpenCard={setOpenCard} />
        ) : null}
      </div>

      {showFilter ? (
        <Filter
          filterFields={filterFields}
          setFilterFields={setFilterFields}
          setShowFilter={setShowFilter}
        />
      ) : null}
    </div>
  );
}
