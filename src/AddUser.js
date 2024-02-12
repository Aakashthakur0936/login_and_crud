/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  borderRadius:'0.5rem',
  p: 4,
  "@media(max-width:900px)":{
    width: 300,
  }
};

export default function AddUser({open,handleClose, addData, data}) {
  const validationSchema = yup.object({
    name: yup.string().trim().required("Please enter your name"),
    password: yup.string().trim().required("Please enter your password"),
  });



const formik = useFormik({
  initialValues: {
    name: "",
    password: "",
  },
  validationSchema: validationSchema,
  onSubmit: async (values, { resetForm }) => {
    addData(values)
    handleClose()

      resetForm();
  },
});


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
        <Box sx={{
          display:'flex',
          justifyContent:'space-between'
        }}>

        <Typography component={'h1'} sx={{
            fontSize:'1.5rem',
            fontWeight:600,
            textAlign:'center'
        }}>Add User form </Typography>
        <CloseIcon  onClick={handleClose}/>
        </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0.8rem",
            }}
          >
            <Typography component={"label"}>Name</Typography>
            <TextField
              id="name"
              type="text"
              value={formik.values.name}
              placeholder="Enter your Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <Typography component={"p"}>{formik.errors.name}</Typography>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0.8rem",
            }}
          >
            <Typography component={"label"}>Password</Typography>
            <TextField
              id="password"
              type="password"
              value={formik.values.password}
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <Typography component={"p"}>{formik.errors.password}</Typography>
            )}
          </Box>
          <Box>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={!formik.isValid && !formik.dirty}
            >
              Submit
            </Button>
          </Box>
        </form>
        </Box>
      </Modal>
    </div>
  );
}