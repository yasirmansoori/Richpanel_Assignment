import { Link } from "react-router-dom";
import styles from "../styles/notfound.module.css";
const NotFound = () => {
  return (
    <div id={styles.notfound}>
      <div className={styles.notfound}>
        <div className={styles.notfound_404}>
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <Link to="/">Homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
