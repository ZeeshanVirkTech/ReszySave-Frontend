import React, { useEffect, useState } from "react";
import AlertSummary from "../components/AlertSummary";
import Security from "../components/Security";
import { useDispatch } from "react-redux";
import { getAllCameras } from "../redux/apiCalls";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    getAllCameras(dispatch)
  }, [])
  
  return (
    <div>
      <AlertSummary />
      <Security />
    </div>
  )
};

export default Home;
