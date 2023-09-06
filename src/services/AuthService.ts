// AuthService.js
import axios from "axios";

const AuthService = {
  login: async (name: string, password: string) => {
    const response = await axios.post("http://localhost:3000/login", {
      name: name,
      password: password,
    });
    const { token } = response.data;
    localStorage.setItem("token", token);
    return token;
  },
  logout: () => {
    localStorage.removeItem("token");
  },
  getToken: () => {
    return localStorage.getItem("token");
  },
};

export default AuthService;
