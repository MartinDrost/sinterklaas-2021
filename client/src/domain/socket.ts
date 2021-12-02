import { io } from "socket.io-client";
import { environment } from "./environment.constant";

export const socket = io(environment.REACT_APP_SOCKET_URL ?? "");
socket.on("connect", () => {
  console.log("Connected to server");
});
