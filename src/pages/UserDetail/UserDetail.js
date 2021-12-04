import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
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
import {
  AddOutlined,
  DeleteOutlined,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@material-ui/icons";

import authAxios from "../../components/axios";
import { useStyles } from "./UserDetail.style";

function UserDetail() {
  const classes = useStyles();
  const { external_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [hasVisible, setHashVisible] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    try {
      setLoading(true);

      const result = await authAxios.get(`/users`);
      console.log(result.data);
      const user = result.data.find(
        (user) => user.external_id.toString() === external_id
      );
      setUser(user);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return "Loading...";
  }

  return (
    <Box display="flex">
      <Box>
        <Typography>User Detail</Typography>
        <Typography>{user.firstname}</Typography>
        <Typography>{user.lastname}</Typography>
        <Typography>{user.external_id}</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        style={{
          wordBreak: "break-word",
          maxWidth: 280,
          marginLeft: "auto",
        }}
      >
        <QRCode value={user.external_id_hash.toString()} />

        <Box
          style={{
            marginTop: 24,
          }}
        >
          {hasVisible ? (
            <VisibilityOffIcon
              onClick={() => {
                setHashVisible(false);
              }}
            />
          ) : (
            <VisibilityIcon
              onClick={() => {
                setHashVisible(true);
              }}
            />
          )}
        </Box>

        {hasVisible && <Typography>{user.external_id_hash}</Typography>}
      </Box>
    </Box>
  );
}

export default UserDetail;
