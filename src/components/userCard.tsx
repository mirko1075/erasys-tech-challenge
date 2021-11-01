import React from "react";
import { capitalizeFirstChar } from "../helpers/helpers";
import PersonIcon from "@mui/icons-material/Person";

export default function UserCard({ user, setOpenCard }: any) {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "20px",
      }}
    >
      <div>
        <a onClick={() => setOpenCard(false)}>Close</a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <div>
          <div
            style={{
              width: "100vw",
              height: "300px",
              padding: "15px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {user.picture ? (
              <img
                src={user.picture.url}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              <PersonIcon
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            )}
          </div>
          <div
            style={{
              width: "100vw",
              height: "100px",
              fontSize: "20",
              padding: 20,
              textAlign: "center",
            }}
          >
            {capitalizeFirstChar(user.details.headline)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "flex-start",
            justifyContent: "space-around",
            width: "100%",
            padding: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              flexDirection: "column",
              alignContent: "center",
              alignItems: "flex-start",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <div className="text">
              <h4>Personal</h4>
            </div>
            <div className="textMedium">
              <b>Age:</b> {user.details.personal.age}
            </div>
            <div className="textMedium">
              <b>Height:</b> {user.details.personal.height.cm}cm
            </div>
            <div className="textMedium">
              <b>Weight:</b> {user.details.personal.weight.kg}Kg
            </div>
            <div className="textMedium">
              <b>Ethnicity:</b>{" "}
              {capitalizeFirstChar(user.details.personal.ethnicity)}
            </div>
            <div className="textMedium">
              <b>Eye color:</b>{" "}
              {capitalizeFirstChar(user.details.personal.eye_color)}
            </div>
            <div className="textMedium">
              <b>Body type:</b>{" "}
              {capitalizeFirstChar(user.details.personal.body_type)}
            </div>
            <div className="textMedium">
              <b>Smoker:</b> {capitalizeFirstChar(user.details.personal.smoker)}
            </div>
            <div className="textMedium">
              <b>Ethnicity:</b>{" "}
              {capitalizeFirstChar(user.details.personal.ethnicity)}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              flexDirection: "column",
              alignContent: "center",
              alignItems: "flex-start",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <div className="text">
              <h4>Sexual</h4>
            </div>
            <div className="textMedium">
              <b>Role:</b>{" "}
              {capitalizeFirstChar(user.details.sexual.anal_position)}
            </div>
            <div className="textMedium">
              <b>Safer_sex:</b>{" "}
              {capitalizeFirstChar(user.details.sexual.safer_sex)}
            </div>
            <div className="textMedium">
              <b>SM:</b> {capitalizeFirstChar(user.details.sexual.sm)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 body_hair": "LITTLE",
            "body_type": "BELLY",
            "ethnicity": "MIXED",
            "eye_color": "NOENTRY",
            "height": {
                "cm": 156
            },
            "relationship": "SINGLE",
            "smoker": "YES",
            "weight": {
                "kg": 117
            }
        },
        "sexual": {
            "anal_position": "TOP_ONLY",
            "safer_sex": "NEVER",
            "sm": "NO"
        },
 */
