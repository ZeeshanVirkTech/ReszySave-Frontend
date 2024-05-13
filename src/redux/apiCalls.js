import axios from "axios";
import { Failure, isFetchedData, Start } from "./Slices/cameraSlice";
import { serverBaseUrl } from "../server/sererUrl";

export const getAllCameras = async (dispatch) => {
  dispatch(Start());
  try {
    const res = await axios.get(`${serverBaseUrl}/api/v1/camera/getAllCameraDetails`);
    // console.log(res.data);
    dispatch(isFetchedData(res.data?.data));
  } catch (error) {
    console.log(error);
    dispatch(Failure(error.response?.data));
  }
};
