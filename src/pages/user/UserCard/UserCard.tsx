import userCardStyle from "./usercard.module.scss"
import UserBadgeLarge from "components/Badges/UserBadgeLarge"
import { t } from "i18next"


function UserCard(user: any) {

          return (
                    <div className={userCardStyle.user_container}>
                              <div className={userCardStyle.user_image}>
                                        <UserBadgeLarge />
                              </div>
                              <div className={userCardStyle.user_details_container}>
                                        <span className={userCardStyle.title}>
                                                  {t("user_details")}:
                                        </span>
                                        <span className={userCardStyle.user_details}>
                                                  {t("first_name")}:
                                        </span>  {user.firstname}
                                        <span className={userCardStyle.user_details}>
                                                  {t("last_name")}:
                                        </span>{user.lastname}
                                        <span className={userCardStyle.user_details}>
                                                  {t("city")}:
                                        </span>{user.city}
                                        <span className={userCardStyle.user_details}>
                                                  {t("zip")}:
                                        </span>{user.zipcode}
                                        <span className={userCardStyle.user_details}>
                                                  {t("street")}:
                                        </span>  {user.street} {user.number}
                                        <span className={userCardStyle.user_details}>
                                                  {t("email")}:
                                        </span>{user.email}
                                        <span className={userCardStyle.user_details}>
                                                  {t("phone")}:
                                        </span>{user.phone}
                              </div>
                    </div>
          )
}

export default UserCard