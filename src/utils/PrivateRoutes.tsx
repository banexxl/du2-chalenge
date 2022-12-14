import { Outlet, Navigate } from "react-router-dom"
import getRolesFromToken from "./jwtDecoder"

const PrivateRoutes = () => {

          const validated = getRolesFromToken()

          return (
                    validated ? <Outlet /> : <Navigate to="/auth/login" />
          )
}

export default PrivateRoutes