"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "sonner";
import React from "react";
import ChatProvider from "@/app/context/ChatContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            enableSystem
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
        >
            <ChatProvider>
                {children}
                <ToastProvider />
            </ChatProvider>
        </ThemeProvider>
    );
}

function ToastProvider() {
    const { resolvedTheme } = useTheme();

    return (
        <Toaster
            className="mt-12"
            position="top-right"
            theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
    );
}