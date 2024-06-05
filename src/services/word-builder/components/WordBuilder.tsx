"use client";
import VideoFeed from "@/services/webcam/components/VideoFeed";
import { useCallback, useEffect, useState } from "react";
import {
  StyledWordContainer,
  StyledH1Letter,
  WordBuilderContainer,
} from "./styles";
import { faker } from "@faker-js/faker";

const WordBuilder = () => {
  const [word, setWord] = useState("");
  const [word2Build, setWord2Build] = useState(faker.lorem.word());
  const [currentLetter, setCurrentLetter] = useState<string>();
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        // Handle the Enter key press
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
    if (word === word2Build) {
      setWord2Build(faker.lorem.word());
      setWord("");
    }
  }, [word, setWord2Build]);

  useEffect(() => {
    // Add event listener for keydown on the whole document
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [word, currentLetter, setWord]);

  return (
    <WordBuilderContainer>
      <h2>
        The word you have to build is <b>{word2Build}</b>
      </h2>
      <VideoFeed setSign={setCurrentLetter} />
      <StyledWordContainer>
        <StyledH1Letter>{word}</StyledH1Letter>
        <StyledH1Letter>{currentLetter}</StyledH1Letter>
      </StyledWordContainer>
    </WordBuilderContainer>
  );
};

export default WordBuilder;
