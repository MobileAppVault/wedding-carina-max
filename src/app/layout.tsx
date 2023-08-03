import "./globals.css";
import { Caveat, Concert_One, Itim, Patrick_Hand } from "next/font/google";

//const inter = Concert_One();

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "RELEASE IN...",
  description: "JULY 14, 2023 • SEYCHELLES, EAST AFRICA",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={caveat.className}>{children}</body>
    </html>
  );
}
