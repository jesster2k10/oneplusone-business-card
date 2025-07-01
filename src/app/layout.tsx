import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "ONEPLUSONE",
  description: "Business card contact information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="font-text" lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/wiz7gcs.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
