"use client";
import { useState } from "react";
import VideoFeed from "../../../webcam/components/VideoFeed";
import { IndividualLettersContainer, StyledH1Letter } from "./styles";

const IndividualLetters = () => {
  const [letter, setLetter] = useState<string>();
  return (
    <IndividualLettersContainer>
      <VideoFeed setSign={setLetter} />
      <StyledH1Letter>{letter}</StyledH1Letter>
    </IndividualLettersContainer>
  );
};

export default IndividualLetters;
