import userCardStyle from "./usercard.module.scss"
import UserBadgeLarge from "components/Badges/UserBadgeLarge"


function UserCard(user: any) {

          return (
                    <div className={userCardStyle.user_container}>
                              <div className={userCardStyle.user_image}>
                                        <UserBadgeLarge />
                              </div>
                              <div className={userCardStyle.user_details_container}>
                                        <span>
                                                  First name: {user.firstname}
                                        </span>
                                        <span>
                                                  Last name: {user.lastname}
                                        </span>
                                        <span>
                                                  City: {user.city}
                                                  ZIP: {user.zipcode}
                                                  Street: {user.street} {user.number}
                                        </span>
                                        <span>
                                                  Email: {user.email}
                                        </span>
                                        <span>
                                                  Phone number: {user.phone}
                                        </span>
                              </div>
                    </div>
          )
}

export default UserCard