import { load } from "ts-dotenv";

export const environment = load({
  REACT_APP_SOCKET_URL: String,
});
