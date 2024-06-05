"use client";

import { Button } from "primereact/button";
import { Nav, NavElement } from "./styles";
import { useRouter } from "next/navigation";
import { useAtom, useSetAtom } from "jotai";
import { webcamAtom } from "@/services/webcam/webcam.state";
import { PrimeIcons } from "primereact/api";
import { Dispatch, SyntheticEvent, useEffect } from "react";
import { SetStateAction } from "jotai";
import { legendAtom } from "@/common/state/globalState";

const Navbar = () => {
  const router = useRouter();
  const [webcamState, setWebcamState] = useAtom(webcamAtom);
  const [legendState, setLegendState] = useAtom(legendAtom);

  const handleToggle =
    (
      setState: Dispatch<SetStateAction<boolean>>,
      setOffState?: Dispatch<SetStateAction<boolean>>
    ) =>
    (e: SyntheticEvent) => {
      e.preventDefault();
      setState((prev) => !prev);
      {
        setOffState && setOffState(false);
      }
    };

  const webcamIcon = webcamState ? PrimeIcons.EYE_SLASH : PrimeIcons.EYE;
  const webcamText = webcamState ? "Hide Webcam" : "Show Webcam";
  const webcamSeverity = webcamState ? "danger" : "success";

  const legendText = legendState ? "Hide Legend" : "Show Legend";

  useEffect(() => {
    return () => {
      setLegendState(false);
      setWebcamState(true);
    };
  }, []);

  return (
    <Nav>
      <NavElement>
        <Button onClick={() => router.push("/")}>Start Over</Button>
      </NavElement>
      <NavElement>
        {webcamState && (
          <Button
            icon={PrimeIcons.MAP}
            severity="help"
            onClick={handleToggle(setLegendState)}
          >
            {legendText}
          </Button>
        )}
        <Button
          icon={webcamIcon}
          onClick={handleToggle(setWebcamState, setLegendState)}
          severity={webcamSeverity}
        >
          {webcamText}
        </Button>
      </NavElement>
    </Nav>
  );
};

export default Navbar;
