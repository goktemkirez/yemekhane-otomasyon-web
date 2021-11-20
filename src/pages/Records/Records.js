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
import { AddOutlined } from "@material-ui/icons";

import { useStyles } from "./Records.style";

function Records() {
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
      console.log(result.data.items);
      setUserListData(result.data.items);
    } catch (error) {
      console.log("error", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const createPlaylist = async () => {
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

  const removeTracks = async (playlistId) => {
    // https://developer.spotify.com/documentation/general/guides/working-with-playlists/#following-and-unfollowing-a-playlist
    // they say "We have no endpoint for deleting a playlist in the Web API"
    // Burası biraz karışık şimdilik dokunma başka bir şeye bakalım
    // ama eğer ki karta bi fonksiyon koycaksam ve bu fonksiyon da o playlistin id'si ile request atıcaksa bu şekilde implement etmek gerekiyor
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
        <Typography variant="h5">Playlists</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddOutlined />}
          onClick={createPlaylist}
        >
          Create Playlist
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
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userListData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.external_id}
                      </TableCell>
                      <TableCell align="right">{row.firstname}</TableCell>
                      <TableCell align="right">{row.lastname}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* {userListData.map((userData) => (
              <PlaylistCard
                key={userData.id}
                owner={userData?.owner?.display_name} // Burda neden template literal yaptın direk bu şekilde de geçebilrisin propları
                img={userData?.images[0]?.url} // Olaylara hep ben bununla bişey yaparım ilerde diye bakıyom :D
                name={userData?.name}
                urlLink={userData?.external_urls?.spotify}
                tracksUrl={userData.id}
                onDeleteClick={() => {
                  removeTracks(userData.id);
                }}
              />
            ))} */}
          </>
        )}
      </Container>
    </Box>
  );
}

export default Records;
