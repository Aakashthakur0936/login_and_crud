/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { Box, Button } from "@mui/material";
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import EditUser from "./EditUser";
import AddUser from "./AddUser";

const TableComponent = ({ data, changeData, addData }) => {
  const navigation = useNavigate("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [addUserOpen, setAddUserOpen] = useState(false);
  const handleAddUserOpen = () => setAddUserOpen(true);
  const handleAddUserClose = () => setAddUserOpen(false);

  const [editUserData, setEditUserData] = useState("");
  const handleEdit = (event) => {
    data.map((item, i) => {
      if (item.id == event) {
        setEditUserData(item);
        handleOpen();
      }
    });
  };

  const handleAdduser = () => {
    handleAddUserOpen();
  };
  const handleDelete = (event) => {
    const filterData = data.filter((item) => item.id !== event);
    changeData(filterData);
    // alert(event)
  };

  const handleLogout = () => {
    navigation("/");
  };

  const column = [
    { title: "Name", field: "name" },
    { title: "Password", field: "password" },
    {
      title: "Action",
      field: "action",
      render: (rowData) => (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: 'space-between',
              width:'200px'
            }}
          >
            <Button variant="contained" onClick={() => handleEdit(rowData.id)}>
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => handleDelete(rowData.id)}
            >
              Delete
            </Button>
          </Box>
        </>
      ),
    },
  ];
  return (
    <>
      <Box>
        <Box
          sx={{
            textAlign: "end",
            padding: "1rem",
          }}
        >
          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "end",
            padding: "1rem",
          }}
        >
          <Button variant="contained" onClick={handleAdduser}>
            Add User
          </Button>
        </Box>

        <Box
          sx={{
            paddingTop: "5rem",
            border:'1px solid #bbb2b2',
            margin:'0.8rem',
            borderRadius:'0.5rem'
          }}
        >
          <MaterialTable
            options={{
              search: true,
              toolbar: true,
              showTitle: true,
              pageSize: 10,
            }}
            columns={column}
            data={data}
            title="User Table"
            direction="ltr"
          />
        </Box>
        <EditUser
          open={open}
          handleClose={handleClose}
          editUserData={editUserData}
          data={data}
        />
        <AddUser
          open={addUserOpen}
          handleClose={handleAddUserClose}
          editUserData={editUserData}
          data={data}
          addData={addData}
        />
      </Box>
    </>
  );
};

export default TableComponent;
