import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PWA from "@/components/PWA";

const APP_NAME = "Portfolio";
const APP_DEFAULT_TITLE = "Huzaifa Khan | Portfolio";
const APP_TITLE_TEMPLATE = "%s - Huzaifa Khan";
const APP_DESCRIPTION = "Showcasing Huzaifa Khan's skills, projects, and expertise in web development. Explore top-notch projects and innovative solutions.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-title": "Portfolio",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    startupImage: ["/icons/Dark Logo.png"],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <PWA />
        </ThemeProvider>
      </body>
    </html>
  );
}