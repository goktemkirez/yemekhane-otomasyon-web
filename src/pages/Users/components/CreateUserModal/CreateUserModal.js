import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Typography } from "@material-ui/core";

import authAxios from "../../../../components/axios";
import { useStyles } from "./CreateUserModal.style";

const validationSchema = Yup.object({
  external_id: Yup.string("Enter user Turkish Identity Number")
    .min(
      11,
      "Turkish Identity Number should be of minimum 11 characters length"
    )
    .required("ID Number is required"),
  firstname: Yup.string("Enter user name").required("Name is required"),
  lastname: Yup.string("Enter user surname").required("Surname is required"),
});

export default function CreateUserModal(props) {
  const { isOpen, setIsOpen, getUsers } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      external_id: "",
      firstname: "",
      lastname: "",
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createUser(values);
    },
  });

  const createUser = async (data) => {
    try {
      setLoading(true);
      const response = await authAxios.post(`/register`, data);
      getUsers();
      setIsOpen(false);
      console.log(response.data)
    } catch (error) {
      console.log("error", error?.response?.data?.errorMessage);
      setError(error?.response?.data?.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create User</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="external_id"
              name="external_id"
              label="Turkish Identity Number"
              type="number"
              value={formik.values.external_id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.external_id && Boolean(formik.errors.external_id)
              }
              helperText={
                formik.touched.external_id && formik.errors.external_id
              }
            />
            <TextField
              fullWidth
              id="firstname"
              name="firstname"
              label="User Name"
              type="text"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              fullWidth
              id="lastname"
              name="lastname"
              label="User Surname"
              type="text"
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
            <br />
            {error && <Typography>{error}</Typography>}
            <br />
            <Button
              className={classes.btn}
              color="primary"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>
            <Button
              className={classes.btn}
              onClick={() => {
                setIsOpen(false);
              }}
              color="primary"
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
