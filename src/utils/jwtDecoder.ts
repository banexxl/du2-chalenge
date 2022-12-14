
import loadToken from "services/base-http.service"

export default function getRolesFromToken() {

          type Role = {
                    "sub": number,
                    "user": string,
                    "iat": number
          }

          const token: string | null = loadToken().getAccessToken()
          let validated: boolean = false

          const validate = (data: Role) => {
                    Object.keys(data).length === 0 ? validated = false :
                              (typeof data.iat !== "number" && typeof data.sub !== "number" && typeof data.user !== "string") ? validated = false :
                                        validated = true
          };

          if (token !== null && token !== undefined) {
                    const jwtData = token!.split(".")[1]
                    let decodedJwtJsonData: string = ""
                    try {
                              decodedJwtJsonData = window.atob(jwtData)
                    } catch (error: any) {
                              console.log(error.message)
                              return false
                    }
                    const decodedJwtData = JSON.parse(decodedJwtJsonData)

                    validate(decodedJwtData)

                    if (validated) {
                              return true
                    } else {
                              return false
                    }
          } else {
                    return false
          }
}
