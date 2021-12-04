import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { AddOutlined, DeleteOutlined } from "@material-ui/icons";

import authAxios from "../../components/axios";
import { useStyles } from "./Users.style";
import CreateUserModal from "./components/CreateUserModal";

function Users() {
  const classes = useStyles();
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/users`);
      console.log(result.data);
      setUserList(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {isCreateUserModalOpen && (
        <CreateUserModal
          isOpen={isCreateUserModalOpen}
          setIsOpen={setIsCreateUserModalOpen}
          getUsers={getUserList}
        />
      )}
      <Box className={classes.topBox}>
        <Typography variant="h5">Users</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddOutlined />}
          onClick={() => {
            setIsCreateUserModalOpen(true);
          }}
        >
          Create User
        </Button>
      </Box>
      <Container maxWidth="xl" className={classes.containerStyle}>
        {loading ? (
          <Box>
            <Skeleton animation="pulse" width="240">
              loading
            </Skeleton>
          </Box>
        ) : (
          <>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>User Number</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Surname</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userList.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.external_id}
                      </TableCell>
                      <TableCell align="left">{row.firstname}</TableCell>
                      <TableCell align="left">{row.lastname}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.btnRow}
                          onClick={() => {
                            history.push(`/users/${row.external_id}/detail`);
                          }}
                        >
                          Detail
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.btnRow}
                          startIcon={<DeleteOutlined />}
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </Box>
  );
}

export default Users;
