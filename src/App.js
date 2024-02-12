import "./App.css";
import { useState } from "react";
import Loginform from "./Loginform";
import TableComponent from "./TableComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "demo1",
      password: "12345",
    },
    {
      id: 2,
      name: "demo2",
      password: "12345",
    },
    {
      id: 3,
      name: "demo3",
      password: "12345",
    },
    {
      id: 4,
      name: "demo4",
      password: "12345",
    },
    {
      id: 5,
      name: "demo5",
      password: "12345",
    },
    {
      id: 6,
      name: "demo6",
      password: "12345",
    },
  ]);

  const changeData = (value) => {
    setData(value);
  };

  const addData = (value) => {
    const newItem = {
      id: data.length + 1,
      name: value.name,
      password: value.password,
    };

    setData([...data, newItem]);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Loginform addData={addData} data={data} />}
          />
          <Route
            path="/table"
            exact
            element={
              <TableComponent
                data={data}
                changeData={changeData}
                addData={addData}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
