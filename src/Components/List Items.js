import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
export default function List_Items() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const submitdata = (e) => {
    e.preventDefault();
    if (error) return;
    const temp = [...data];
    temp.push(name);
    setData(temp);
    setName("");
  };

  useEffect(() => {
    if (name.length > 8) setError(true);
    else setError(false);
  }, [name]);

  const remove = (index) => {
    let newdata = [...data];
    newdata.splice(index, 1);
    setData(newdata);
  };

  const update = (index) => {
    if (error) return;

    let newdata = [...data];
    newdata[index] = name;
    setData(newdata);
  };
  console.log(data);
  return (
    <div>
      <h1 style={{ margin: "50px" }} className="text-center">
        List Items
      </h1>

      <div style={{ margin: "50px" }}>
        <form onSubmit={submitdata}>
          <h3>Submit Your Items</h3>
          <label>Name</label>
          <br />

          <div>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
            />
          </div>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>

      {error ? (
        <span style={{ color: "red" }}>
          Exceeded Length
          <br />
          It should be less than 8
        </span>
      ) : null}

      {data.map((item, index) => {
        return (
          <div className="list">
            <li key={index}>
              {item}{" "}
              <button style={{ margin: "20px" }} onClick={() => remove(index)}>
                Remove Item
              </button>
              <button onClick={() => update(index)}>Update</button>{" "}
            </li>
          </div>
        );
      })}
    </div>
  );
}
