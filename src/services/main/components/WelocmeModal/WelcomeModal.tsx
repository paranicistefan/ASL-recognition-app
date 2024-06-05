import { Dialog } from "primereact/dialog";
import styled from "styled-components";
import { H3, StyledDialog, StyledFooter } from "./styles";
import { Button } from "primereact/button";
import { Bold } from "@/common/styles/fontStyles";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
const WelcomeModal = () => {
  const router = useRouter();

  const handleNavigation =
    (path: "wordExercise" | "wordScrambler" | "individualLetters") =>
    (e: SyntheticEvent) => {
      e.preventDefault();
      router.push(`recognize/${path}`);
    };

  const footer = (
    <StyledFooter>
      <Button onClick={handleNavigation("individualLetters")}>
        Test Individual Letters
      </Button>
      <Button onClick={handleNavigation("wordScrambler")}>Write a word</Button>
      <Button onClick={handleNavigation("wordExercise")}>
        Word Building Exercise
      </Button>
    </StyledFooter>
  );

  return (
    <StyledDialog
      onHide={() => {}}
      closable={false}
      visible={true}
      header={<H3>Welcome to Sign & Spell!</H3>}
      footer={footer}
    >
      <p>
        Thank you for choosing Sign & Spell, the interactive tool designed to
        help you master American Sign Language (ASL) in a fun and effective way.
        Get ready to boost your ASL skills through our specially designed modes:
      </p>
      <ol>
        <li>
          <Bold>Test Letters:</Bold> This mode allows you to practice individual
          letters in ASL. Simply make a sign with your hand, and the app will
          recognize and display the corresponding letter. It’s a great way to
          test your knowledge and improve your signing accuracy.
        </li>
        <li>
          <Bold>Write a Word:</Bold> Have a specific word in mind? Enter it into
          the app, and then spell it out in ASL. This mode guides you through
          each letter, helping you learn how to sign complete words correctly.
        </li>
        <li>
          <Bold>Word Building Exercise:</Bold> Ready to take your skills to the
          next level? Engage in our Word Building exercises where you can create
          words from random letters and form sentences in a fun, interactive
          way. It’s perfect for practicing and improving your fluency.
        </li>
      </ol>
      <p>
        Each mode is designed to enhance your learning experience, whether you
        are a beginner or looking to polish your skills. Dive in and start
        exploring the fascinating world of ASL!
      </p>
    </StyledDialog>
  );
};

export default WelcomeModal;
