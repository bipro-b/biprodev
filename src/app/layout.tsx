import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Production-Ready DevOps for Startups | AWS Infrastructure",
  description:
    "CI/CD pipelines, scalable AWS infrastructure, monitoring and auto-healing systems for startups preparing to scale.",
  keywords: [
    "DevOps consultant",
    "AWS infrastructure",
    "CI/CD setup",
    "Startup DevOps",
    "Cloud architecture",
  ],
  openGraph: {
    title: "Production-Ready DevOps for Startups",
    description:
      "Scalable, auto-healing AWS infrastructure built for rapid user growth.",
    url: "https://yourdomain.com",
    siteName: "DevOpsPro",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}