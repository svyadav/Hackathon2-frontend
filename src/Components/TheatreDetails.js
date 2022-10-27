import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import env from "../environment";
import axios from "axios";
const TheatreDetails = () => {
  const [data, setData] = useState([]);
  const loadTheatre = async () => {
    let token = sessionStorage.getItem("token");
    if (token) {
      let res = await axios.get(`${env.apiurl}/users/theatre`);
      if (res.data.statusCode === 200) {
        setData(res.data.data);
      } else {
        alert(res.data.message);
      }
    } else {
      alert("Token ot found");
    }
  };

  useEffect(() => {
    loadTheatre();
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>TheatreId</th>
            <th>Movie Name</th>
            <th>Movie time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.theatreId}</td>
                <td>{e.movieName}</td>
                <td>{e.movieTime}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => loadTheatre()}>
        Refresh
      </Button>
    </>
  );
};
export default TheatreDetails;
