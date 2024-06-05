"use client";
import Navbar from "@/common/components/Navbar/Navbar";
import { ILayoutComponent } from "@/common/types/routerTypes";
import {
  StyledLayoutContainer,
  StyledLegendImage,
  StyledPageContainer,
  StyledPageLayout,
} from "./styles";
import { useAtomValue } from "jotai";
import ASLLegend from "@/assets/ASLLegend.jpeg";
import Image from "next/image";
import { legendAtom } from "@/common/state/globalState";

const RegcognizeLayout = ({ children }: ILayoutComponent) => {
  const showLegend = useAtomValue(legendAtom);

  return (
    <StyledLayoutContainer>
      <Navbar />
      <StyledPageLayout>
        <StyledPageContainer>{children}</StyledPageContainer>

        {showLegend && (
          <StyledLegendImage
            src={ASLLegend}
            alt={"ASL legend"}
            width={600}
            height={600}
          />
        )}
      </StyledPageLayout>
    </StyledLayoutContainer>
  );
};

export default RegcognizeLayout;
