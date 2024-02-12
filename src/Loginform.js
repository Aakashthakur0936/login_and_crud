/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom'
import * as yup from "yup";

const Loginform = ({addData, data}) => {

    const navigation = useNavigate('')

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
        data.map((item, i)=>{
            if(item.name == values.name && item.password == values.password){
                navigation('/table')
            }

        })
        resetForm();
    },
  });
  return (
    <Box>
      <Box
        sx={{
          border: "1px solid #d5cdcd",
          borderRadius: "0.5rem",
          width: "50%",
          margin: "auto",
          marginTop: "5rem",
          padding: "2rem",
          "@media(max-width:900px)":{
            width:'80%'
          }
        }}
      >
        <form onSubmit={formik.handleSubmit}>
        <Typography component={'h1'} sx={{
            fontSize:'1.5rem',
            fontWeight:600,
            textAlign:'center'
        }}>Login form</Typography>
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

    </Box>
  );
};

export default Loginform;
