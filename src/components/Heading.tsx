import type { JSX, ReactNode } from "react"

interface Props {
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    children: ReactNode,
    className?: string
}

export const Heading = ({ level = 1, children, className }: Props) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements
    return (
        <Tag className={`font-bold text-gray-800 ${className}`}>{children}</Tag>
    )
}