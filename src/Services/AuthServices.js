import axios from "axios";

const APIURL = "/api/users";

const RegisterUser = async (userData) => {
  const response = await axios.post(APIURL, userData);
  if (response.status === 201) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  console.log(response.data);
  return response;
};

const LoginUser = async (userData) => {
  const response = await axios.post(APIURL + "/login", userData);
  if (response.status === 200) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  console.log(response.data);
  return response;
};

const LogoutUser = () => {
  localStorage.removeItem("user");
};

export { RegisterUser, LoginUser, LogoutUser };
