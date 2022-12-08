import React from 'react'
import { AppLayout } from 'components/Layouts';
import styles from './404.module.css';

import { useTranslation } from "react-i18next";

const NotFound = () => {

          const { t } = useTranslation();

          return (
                    <AppLayout>
                              <div className={styles.login_page}>
                                        <h1 className={styles.title}>{t("not_found")}</h1>
                              </div>
                    </AppLayout>
          )
}

export default NotFound;