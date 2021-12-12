import React from "react";
import { Button, Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4 usercard repofont">
      <img src={user.avatar_url} style={{ borderRadius: "20px" }} />
      <CardBody className="mt-4 ">
        <div style={{ fontWeight: "600", fontSize: "22px" }}>{user.name}</div>
        <div style={{ fonSize: "18px", marginTop: "10px" }}>
          {user.location}
        </div>
        <div style={{ fonSize: "18px" }}>{user.bio}</div>
        <div style={{ fonSize: "18px" }}>
          Available for Hire: {user.hireable ? "Yes" : "Nope"}
        </div>
        <div style={{ fonSize: "18px" }}>Followers: {user.followers}</div>
        <a href={user.html_url} target="_blank">
          <Button
            className="fetchbtn mt-5"
            style={{ width: "90%", fontWeight: "600" }}
          >
            Check Profile
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

export default UserCard;
