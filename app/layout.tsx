import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huzaifah Fatima Syed — Financial Analysis Portfolio",
  description: "Financial modeling, forecasting, valuation, and data analytics portfolio.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
