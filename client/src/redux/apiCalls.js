import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../request";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user); // Sends login data to server
    dispatch(loginSuccess(res.data)); // Dispatch login success if API returns data
  } catch (err) {
    dispatch(loginFailure()); // Dispatch failure if an error occurs
  }
};
