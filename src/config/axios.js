import axios from "axios";

const host = window.location.protocol + "//" + window.location.host;
const newHost = host.slice(0, -1) + "1";

const clienteAxios = axios.create({
  baseURL: newHost,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export default clienteAxios;
