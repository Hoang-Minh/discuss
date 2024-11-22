"use client";

import { NextUIProvider } from "@nextui-org/react";

interface ProviersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProviersProps) {
    return <NextUIProvider>{children}</NextUIProvider>;
}