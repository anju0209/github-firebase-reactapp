import React, { useContext, useState } from "react";
import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { toast } from "react-toastify";
import Axios from "axios";
import Footer from "../Layout/Footer";
const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data);
      console.log({ data });
    } catch (eror) {
      toast("Unable to locate user", { type: "error" });
      setUser(null);
    }
  };
  //PUt Anypage behind login

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  }

  return (
    <Container className="navtext">
      <style>{"body { background-color: #1E1D2B; }"}</style>
      <h1 className="text-center text-white mt-5 ">
        Welcome To Github Firebase App
      </h1>
      <Row className="mt-5">
        <InputGroup style={{ width: "80%", margin: "auto" }}>
          <Input
            className="inputbox"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Please provide the username"
          />
          <InputGroupAddon addonType="append">
            <Button onClick={fetchDetails} className="fetchbtn" id="search">
              Fetch User
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Row>
      <Row className="mt-5">
        <Col md="5">{user ? <UserCard user={user} /> : null}</Col>
        <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
      </Row>
      {user ? null : <Footer />}
    </Container>
  );
};

export default Home;
