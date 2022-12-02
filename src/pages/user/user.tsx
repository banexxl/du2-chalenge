import Headline from 'components/Headline';
import { AppLayout } from 'components/Layouts';
import styles from './user.module.css';

const NotFound = () => {
          return (
                    <AppLayout>
                              <Headline title="User" />
                              <div className={styles.login_page}>
                                        <h1 className={styles.title}>User</h1>
                              </div>
                    </AppLayout>
          )
}

export default NotFound;