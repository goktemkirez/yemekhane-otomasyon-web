import React, { useEffect, useState } from "react";
import authAxios from "../../components/axios";
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

import { useStyles } from "./Users.style";

function Users() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [userListData, setUserListData] = useState([]);

  useEffect(() => {
    getUserListData();
  }, []);

  const getUserListData = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/users`);
      console.log(result.data);
      setUserListData(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const createUser = async () => {
    try {
      const result = await authAxios.get(`/me`);
      const response = await authAxios.post(
        `/users/${result.data.id}/playlists`,
        {
          name: "New Playlist",
          description: "New playlist description",
          public: false,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  const deactivateUser = async (playlistId) => {
    try {
      const response = await authAxios.delete(
        `/playlists/${playlistId}/tracks`
      );
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  return (
    <Box>
      <Box className={classes.topBox}>
        <Typography variant="h5">Users</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddOutlined />}
          onClick={createUser}
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
                  {userListData.map((row) => (
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
                        >
                          Detail
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.btnRow}
                          startIcon={<DeleteOutlined />}
                          onClick={deactivateUser(row.id)}
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
