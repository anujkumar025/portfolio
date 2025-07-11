"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isMounted, setIsMounted] = React.useState(false);
    // Ensure this runs only on the client
    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    // Avoid rendering children until the theme is applied
    if (!isMounted) {
        return <div style={{ visibility: "hidden" }}>{children}</div>;
    }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}