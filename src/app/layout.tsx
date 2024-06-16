import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

import { siteConfig } from "@/config/site";
import { Provider as ThemeProvider } from "@/components/theme/provider";
import { Wrapper as ThemeWrapper } from "@/components/theme/wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </ThemeWrapper>
      </body>
    </html>
  );
}
