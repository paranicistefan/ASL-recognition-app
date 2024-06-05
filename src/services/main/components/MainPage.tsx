"use client";

import { useState } from "react";
import { StyledHome } from "../styles";
import WelcomeModal from "./WelocmeModal/WelcomeModal";
import VideoFeed from "@/services/webcam/components/VideoFeed";

const MainPage = () => {
  return (
    <StyledHome>
      <WelcomeModal />
      {/* {!open && <VideoFeed />} */}
    </StyledHome>
  );
};

export default MainPage;
