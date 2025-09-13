import type { ReactNode } from "react"
import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Login } from "./public/Login"
import { PrivateGuard } from "./guard/PrivateGuyard"
import { PrivateRouter } from "./private/PrivateRouter"
import { RoutesWithNotFound } from "./components/RoutesWithNotFound"
import { CustomForm } from "./components/CustomForm"

interface Props {
    children: ReactNode
}

export const AppRouter = ({ children }: Props) => {
    return (<>
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<CustomForm />} />
                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter />}></Route>
                </Route>
            </RoutesWithNotFound>
                {children}
        </BrowserRouter>
    </>)
}