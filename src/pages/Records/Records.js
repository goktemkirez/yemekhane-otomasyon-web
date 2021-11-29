import React, { useEffect, useState } from "react";
import {
  Box,
  // Button,
  Container,
  // Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
// import { AddOutlined } from "@material-ui/icons";

import authAxios from "../../components/axios";
import { useStyles } from "./Records.style";

function Records() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [recordList, setRecordList] = useState([]);

  useEffect(() => {
    getRecordList();
  }, []);

  const getRecordList = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/records`);
      console.log(result.data);
      setRecordList(result.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
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
                    <TableCell>ID</TableCell>
                    <TableCell align="right">User Id</TableCell>
                    <TableCell align="right">Created Date - Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recordList.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.user_id}</TableCell>
                      <TableCell align="right">{row.created_at}</TableCell>
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

export default Records;
