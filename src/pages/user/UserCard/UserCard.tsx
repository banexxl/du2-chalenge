import userCardStyle from "./usercard.module.scss"
import UserBadgeLarge from "components/Badges/UserBadgeLarge"


function UserCard(user: any) {

          return (
                    <div className={userCardStyle.user_container}>
                              <div className={userCardStyle.user_image}>
                                        <UserBadgeLarge />
                              </div>
                              <div className={userCardStyle.user_details_container}>
                                        <span className={userCardStyle.title}>
                                                  User details:
                                        </span>
                                        <span className={userCardStyle.user_details}>
                                                  First name:
                                        </span>  {user.firstname}
                                        <span className={userCardStyle.user_details}>
                                                  Last name:
                                        </span>{user.lastname}
                                        <span className={userCardStyle.user_details}>
                                                  City:
                                        </span>{user.city}
                                        <span className={userCardStyle.user_details}>
                                                  ZIP:
                                        </span>{user.zipcode}
                                        <span className={userCardStyle.user_details}>
                                                  Street:
                                        </span>  {user.street} {user.number}
                                        <span className={userCardStyle.user_details}>
                                                  Email:
                                        </span>{user.email}
                                        <span className={userCardStyle.user_details}>
                                                  Phone number:
                                        </span>{user.phone}
                              </div>
                    </div>
          )
}

export default UserCard