import React, { useContext, useState } from "react";
import logo from "../Pages/signupW.png";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Card,
  CardBody,
  CardImg,
} from "reactstrap";
import { FaEnvelope, FaKey } from "react-icons/fa";
import firebase from "firebase/compat/app";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../Layout/Footer";
const Signup = () => {
  const context = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };
  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <Container className="text-center">
      <style>{"body { background-color: #1E1D2B; }"}</style>
      <Card className="mx-auto formS" style={{ width: "35rem" }}>
        <CardImg top className="cardimg" src={logo} />
        <CardBody className="mt-3">
          <h4
            className="card-title navtext text-center mb-5 mt-1"
            style={{ fontSize: "32px", letterSpacing: "2px" }}
          >
            Login here
          </h4>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ backgroundColor: "#282a39" }}>
                    <FaEnvelope size="25" color="white" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="inputbox"
                  placeholder="Username/Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <br />
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText style={{ backgroundColor: "#282a39" }}>
                    <FaKey size="25" color="white" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="inputbox"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <br />
            <FormGroup>
              <Button type="submit" className="w-100 btns">
                Login
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
      <Footer />
    </Container>
  );
};

export default Signup;
