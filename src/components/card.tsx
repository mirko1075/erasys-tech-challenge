import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import {
  formatStatus,
  formatDate,
  capitalizeFirstChar,
} from "../helpers/helpers";
import { ReactComponent as King } from "../assets/king.svg";

export default function Card({
  user,
  setUserToShow,
  openCard,
  setOpenCard,
  setShowFilter,
}: any) {
  const openUserCard = async (user: any) => {
    await setShowFilter(false);
    await setUserToShow(user);
    await setOpenCard(!openCard);
  };

  return (
    <div className="card" onClick={() => openUserCard(user)}>
      <div className="cardContainer">
        <div
          style={{
            height: "30px",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {user.online_status !== "OFFLINE" ? (
            <div
              className="tinyText"
              style={{ width: "30px", textAlign: "center" }}
            >
              {formatStatus(user.online_status)}
            </div>
          ) : (
            <div className="tinyText">
              {formatDate(user.last_login)}{" "}
              {formatDate(user.last_login) === 1 ? "day" : "days"} ago
            </div>
          )}

          <div
            className="tinyText"
            style={{
              paddingLeft: "4px",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {user.details.location.distance} kms
          </div>
        </div>
      </div>
      {user.picture && user.picture.url ? (
        <div>
          <img
            className="card-img-top"
            src={user.picture.url}
            alt="Card image cap"
          />
        </div>
      ) : (
        <div>
          <PersonIcon style={{ width: "100%", height: "100%" }} />
        </div>
      )}
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "left-end",
          backgroundColor: "grey",
        }}
      >
        {user.is_plus ? (
          <King
            style={{
              width: "24px",
              height: "24px",
              backgroundColor: "red",
            }}
          />
        ) : null}
        <h5 className="card-title tinyText ">
          <span className="whiteBold">{capitalizeFirstChar(user.name)}</span>
        </h5>
      </div>
    </div>
  );
}
