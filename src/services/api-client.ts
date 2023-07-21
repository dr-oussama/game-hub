import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "516b4ff1c41b4fe9889cf9b26191d838",
  },
});
