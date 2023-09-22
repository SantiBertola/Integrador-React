import { BASE_URL } from "../utils/constants";
import axios from "axios";

export const createUser = async (nombre, email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/register`, {
      nombre,
      email,
      password,
    });
    return data;
  } catch (error) {
    return alert(error.response.data.errors[0].msg);
  }
};

export const loginUser = async (email, password) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};

export const verifyUser = async (email, code) => {
  try {
    const response = await axios.patch(`${BASE_URL}/auth/verify`, {
      email,
      code,
    });
    alert("Usuario verificado con éxito");
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
