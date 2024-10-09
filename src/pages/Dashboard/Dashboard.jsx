import React from "react";
import styles from "./dashboard.module.scss";
import { UserPen, Library, BotMessageSquare, LogOut } from "lucide-react";

function Dashboard() {
  return (
    <div className={styles.outerbox}>
      <div className={styles.options}>
        <div className={styles.sidebar}>
          <h1>Tuto</h1>
          <nav>
            <a href="#">
              {" "}
              <UserPen />
              Profile
            </a>
            <a href="#">
              <Library /> Subjects
            </a>
            <a href="#">
              <BotMessageSquare />
              Companion
            </a>
          </nav>
        </div>
        <div className={styles.logout}>
          <LogOut />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
