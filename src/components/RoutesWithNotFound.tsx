import type { ReactNode } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

interface Props {
    children: ReactNode
}
export const RoutesWithNotFound = ({ children }: Props) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Navigate to="/404" />}></Route>
            <Route path="*" element={<div><h1>Página no encontrada</h1></div>}></Route>
         </Routes>
    )
}