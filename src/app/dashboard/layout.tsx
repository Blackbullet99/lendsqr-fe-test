import Navbar from "@/components/ui/navbar/navbar";
import Sidebar from "@/components/ui/sidebar/sidebar";
import styles from "./styles.module.scss";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Sidebar />
      <section className={styles.dashboard}>{children}</section>
    </div>
  );
};

export default DashboardLayout;
