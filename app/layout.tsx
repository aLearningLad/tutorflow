import type { Metadata } from "next";
import {
  Inter,
  Libre_Caslon_Display,
  Libre_Caslon_Text,
} from "next/font/google";

import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });
const libreDisplay = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "TutorFlow",
  description: "Video tutoring made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signUpForceRedirectUrl={"/dashboard"}>
      <html lang="en">
        <body className={libreDisplay.className}>
          <Toaster
            toastOptions={{
              className: "",
              position: "top-right",
              success: {
                style: {
                  padding: "16px",
                  color: "black",
                  background: "white",
                },
              },
              error: {
                style: {
                  padding: "16px",
                  color: "red",
                  background: "white",
                },
              },
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
