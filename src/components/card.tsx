import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {
  formatStatus,
  formatDate,
  capitalizeFirstChar,
} from "../helpers/helpers";

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
    <div
      className="card"
      style={{ margin: "10px" }}
      onClick={() => openUserCard(user)}
    >
      <div className="cardContainer">
        <div
          style={{
            height: "30px",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            padding: "5px",
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
            <div
              className="tinyText"
              style={{ width: "70px", textAlign: "center" }}
            >
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
              margin: "5px",
            }}
          >
            <PlaceIcon />
            {user.details.location.distance}km
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "left-end",
            }}
          >
            {user.is_plus ? (
              <EmojiEmotionsIcon
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "red",
                }}
              />
            ) : null}
            <div
              className="card-title tinyText "
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                alignContent: "center",
                justifyContent: "left-end",
                paddingTop: "5px",
              }}
            >
              <span className="textMedium">
                {capitalizeFirstChar(user.name)}
              </span>
            </div>
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
          <PersonIcon
            className="card-img-top"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
