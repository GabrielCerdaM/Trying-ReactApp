import { Navigate, Route } from "react-router-dom"
import { PrivateGuard } from "../guard/PrivateGuyard"
import { Dashboard } from "./Dashboard"
import { RoutesWithNotFound } from "../components/RoutesWithNotFound"

export const PrivateRouter = () => {
    return (
        // ${BASE_URL}/private/
        <RoutesWithNotFound>
            <Route element={<PrivateGuard />}>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<Dashboard />} />
                <Route path="/user" element={<Dashboard />} />
            </Route>
        </RoutesWithNotFound>
    )
}