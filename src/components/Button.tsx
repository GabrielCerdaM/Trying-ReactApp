import type { ReactNode } from "react"

interface Props {
    type?: "submit" | "reset" | "button";
    className?: string,
    children: ReactNode,
    parentMethod: () => void
}
export const Button = ({ type = "button", className, children, parentMethod }: Props) => {
    return (
        <>
            <button type={type} className={`w-full shadow-xl bg-blue-600 text-white hover:bg-blue-700 rounded-lg py-2 ${className}`} onClick={parentMethod}>
                {children}
            </button>
        </>
    )
}