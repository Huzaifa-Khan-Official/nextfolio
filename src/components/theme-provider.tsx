"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ReactNode } from "react";
import { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: { children: ReactNode } & ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}