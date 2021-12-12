import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup className="mt-4">
      {repos.map((repo) => (
        <ListGroupItem className="cardrepo mt-4" key={repo.id}>
          <div
            className="repofont"
            style={{
              fontSize: "22px",
              letterSpacing: "2px",
              fontWeight: "600",
            }}
          >
            Repository Name: {repo.name}
          </div>
          <div
            className=" repofont  mt-3"
            style={{ fontSize: "18px", letterSpacing: "2px" }}
          >
            Repository Language:{" "}
            <span
              className="repofont ms-1"
              style={{ opacity: "60%", letterSpacing: "2px" }}
            >
              {repo.language}
            </span>
          </div>
          <div
            className="repofont mt-1"
            style={{ fontSize: "18px", letterSpacing: "2px" }}
          >
            Description:{" "}
            <span style={{ opacity: "60%" }}>
              {repo.description ? repo.description : "None"}
            </span>
          </div>
          <div
            className=" repofont  mt-1"
            style={{ fontSize: "18px", letterSpacing: "2px" }}
          >
            Link:{" "}
            <a
              href={repo.html_url}
              target="_blank"
              className="repofont ms-1"
              style={{
                opacity: "60%",
                letterSpacing: "2px",
                overflowWrap: "break-word",
              }}
            >
              {repo.html_url}
            </a>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
