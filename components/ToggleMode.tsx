'use client'

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { SunIcon, MoonIcon } from "lucide-react"

import React from 'react'
import { Button } from "./ui/button"

const ToggleMode = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                disabled={true}>
            </Button>
        )
    }

    const dark = theme === "dark";

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(dark ? "light" : "dark")}>
            {dark ? (
                <SunIcon className="hover:cursor-pointer hover:text-primary" />
            ) : (<MoonIcon className="hover:cursor-pointer hover:text-primary" />
            )}
        </Button>
    )
}

export default ToggleMode