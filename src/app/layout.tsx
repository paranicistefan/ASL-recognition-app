"use client";

import Navbar from "@/common/components/Navbar/Navbar";
import { Nav } from "@/common/components/Navbar/styles";
import { GlobalStyles, theme } from "@/common/styles/global";
import type { Metadata } from "next";
import { usePathname, useRouter } from "next/navigation";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primeicons/primeicons.css";

import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
      </ThemeProvider>
    </PrimeReactProvider>
  );
}
