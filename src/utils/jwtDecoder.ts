
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
                    console.log("data for validation: ", data);

                    Object.keys(data).length === 0 ? validated = false :
                              (typeof data.iat !== "number" && typeof data.sub !== "number" && typeof data.user !== "number") ? validated = false :
                                        validated = true
          };

          if (token !== null && token !== undefined) {
                    const jwtData = token!.split(".")[1]
                    let decodedJwtJsonData: string = ""
                    try {
                              decodedJwtJsonData = window.atob(jwtData)
                    } catch (error: any) {
                              console.log(error.message)
                              validated = false
                              return false
                    }
                    const decodedJwtData = JSON.parse(decodedJwtJsonData)

                    validate(decodedJwtData)
                    console.log("validated: ", validated);


                    if (validated) {
                              return true
                    } else {
                              return false
                    }
          } else {
                    return false
          }
}
