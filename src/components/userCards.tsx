import React, { useState, useEffect } from "react";
import Card from "./card";
import axios from "axios";
import { computeDistance } from "../helpers/helpers";

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
  const testURL = "";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
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
    const users = await getUsers("DISTANCE");
    console.log("users after fetch :>> ", users);

    for (let i = 0; i < users.length; i++) {
      const details = await getSingleUser(users[i].id);
      console.log("details :>> ", details);
      users[i].details = details;
      console.log("user :>> ", users[i]);
    }

    users.length && (await setUsersArr(users));
    console.log("usersArr :>> ", usersArr);
  };
  return (
    <>{usersArr && usersArr.map((user, i) => <Card key={i} user={user} />)}</>
  );
}
