"use client";
import VideoFeed from "@/services/webcam/components/VideoFeed";
import { useCallback, useEffect, useState } from "react";
import {
  WordScramblerContainer,
  StyledH1Letter,
  StyledWordContainer,
} from "./styles";

const WordScrambler = () => {
  const [word, setWord] = useState("");
  const [currentLetter, setCurrentLetter] = useState<string>();
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // Handle the Enter key press
        console.log(word, currentLetter);

        setWord((prev) => `${prev}${currentLetter}`);
      }
      if (event.key === "Backspace") {
        // Handle the Enter key press
        setWord((prev) => prev.slice(0, prev.length - 1));
      }
      if (event.key === "Space") {
        // Handle the Enter key press
        setWord((prev) => `${prev} `);
      }
    },
    [currentLetter, word, setWord]
  );

  useEffect(() => {
    // Add event listener for keydown on the whole document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [word, currentLetter, setWord]);

  return (
    <WordScramblerContainer>
      <VideoFeed setSign={setCurrentLetter} />
      <StyledWordContainer>
        <StyledH1Letter>{word}</StyledH1Letter>
        <StyledH1Letter>{currentLetter}</StyledH1Letter>
      </StyledWordContainer>
    </WordScramblerContainer>
  );
};

export default WordScrambler;
