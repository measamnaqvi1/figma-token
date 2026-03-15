import React from "react"

export default function Button({ variant = "primary", children }) {
    const style = {
        padding: "var(--spacing-md)",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        color: "var(--color-white)",
        background:
            variant === "primary"
                ? "var(--color-primary)"
                : variant === "secondary"
                    ? "var(--color-secondary)"
                    : "var(--color-danger)"
    }

    return <button style={style}>{children}</button>
}