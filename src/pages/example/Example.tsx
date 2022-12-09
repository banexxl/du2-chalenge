import { AppLayout } from "components/Layouts";
import Headline from "components/Headline";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { cartTotalSelector } from "store/selectors";

const ExamplePage = () => {

          const cartCounter: any = useSelector(cartTotalSelector)

          return (
                    <AppLayout>
                              <Headline title="Example" />
                              <section className={styles.section}>
                                        <h2>Cart page example:</h2>
                                        <h3>Cart counter: {cartCounter}</h3>
                                        <Link to="/cart">
                                                  <button> Cart Page</button>
                                        </Link>
                              </section>
                    </AppLayout>
          );
};

export default ExamplePage;
