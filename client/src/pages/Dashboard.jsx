import Sidebar from "../Components/Sidebar";
import Thread from "../Components/Thread";
import styles from "../styles/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Thread />
    </div>
  );
};

export default Dashboard;
