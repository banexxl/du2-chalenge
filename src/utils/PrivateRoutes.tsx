import { Outlet, Navigate } from "react-router-dom"
import loadToken from "services/base-http.service"


const PrivateRoutes = () => {

          const token = loadToken().getAccessToken()

          return (
                    token ? <Outlet /> : <Navigate to="/auth/login" />
          )
}

export default PrivateRoutes