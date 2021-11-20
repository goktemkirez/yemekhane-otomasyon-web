import axios from "axios";

const authAxios = axios.create({
  // baseURL: "http://192.168.1.37:5499/",
  baseURL: "http://192.168.0.14:5499/",
  // headers: {
  //   Authorization: `Bearer ${API_KEY}`,
  // },
});

export default authAxios;
