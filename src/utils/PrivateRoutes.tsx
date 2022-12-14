import { Outlet, Navigate } from "react-router-dom"
import getRolesFromToken from "./jwtDecoder"

const PrivateRoutes = () => {

          const validated = getRolesFromToken()

          console.log("validated:", validated);


          return (
                    validated ? <Outlet /> : <Navigate to="/auth/login" />
          )
}

export default PrivateRoutes