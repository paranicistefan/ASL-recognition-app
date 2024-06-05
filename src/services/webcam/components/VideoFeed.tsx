"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import * as fp from "fingerpose";
import Handsigns from "@/services/handsigns";

import { StyledWebcam, WebcamContainer } from "./styled";
import { useAtomValue } from "jotai";
import { webcamAtom } from "../webcam.state";
import { ProgressSpinner } from "primereact/progressspinner";

interface IVideoFeed {
  setSign: Dispatch<SetStateAction<string | undefined>>;
}
const VideoFeed = ({ setSign }: IVideoFeed) => {
  const isWebcamActive = useAtomValue(webcamAtom);
  const [isLoading, setIsLoading] = useState(false);
  const videoFeedRef = useRef<Webcam>(null);
  let handposeRef: handpose.HandPose | null = null;

  const detectHands = async () => {
    if (
      typeof videoFeedRef.current !== "undefined" &&
      videoFeedRef.current !== null &&
      videoFeedRef.current.video?.readyState === 4 &&
      handposeRef
    ) {
      const video = videoFeedRef.current.video;
      // const videoWidth = videoFeedRef.current.video.videoWidth;
      // const videoHeight = videoFeedRef.current.video.videoHeight;

      // videoFeedRef.current.video.width = videoWidth;
      // videoFeedRef.current.video.height = videoHeight;

      const hand = await handposeRef.estimateHands(video);
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          Handsigns.aSign,
          Handsigns.bSign,
          Handsigns.cSign,
          Handsigns.dSign,
          Handsigns.eSign,
          Handsigns.fSign,
          Handsigns.gSign,
          Handsigns.hSign,
          Handsigns.iSign,
          Handsigns.jSign,
          Handsigns.kSign,
          Handsigns.lSign,
          Handsigns.mSign,
          Handsigns.nSign,
          Handsigns.oSign,
          Handsigns.pSign,
          Handsigns.qSign,
          Handsigns.rSign,
          Handsigns.sSign,
          Handsigns.tSign,
          Handsigns.uSign,
          Handsigns.vSign,
          Handsigns.wSign,
          Handsigns.xSign,
          Handsigns.ySign,
          Handsigns.zSign,
        ]);
        const estimatedGestures = await GE.estimate(
          hand[0].landmarks as any,
          5.5
        );
        console.log(estimatedGestures);
        if (
          estimatedGestures.gestures === undefined ||
          estimatedGestures.gestures.length === 0
        )
          return setSign(undefined);
        const confidence = estimatedGestures.gestures.map((p) => p.score);
        const maxConfidence = confidence.indexOf(
          Math.max.apply(undefined, confidence)
        );
        setSign(estimatedGestures.gestures[maxConfidence].name);
      }
    }
  };

  useEffect(() => {
    const loadHandpose = async () => {
      await tf.setBackend("webgl");
      handposeRef = await handpose.load();
      console.log("Handpose model loaded.");
    };

    loadHandpose();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      detectHands();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isWebcamActive) setSign(undefined);
  }, [isWebcamActive]);

  const videoConfig: MediaTrackConstraints = { width: 1280, height: 720 };

  if (!isWebcamActive) return;

  return (
    <WebcamContainer>
      {isLoading && <ProgressSpinner />}
      <StyledWebcam ref={videoFeedRef} videoConstraints={videoConfig} />
    </WebcamContainer>
  );
};

export default VideoFeed;
