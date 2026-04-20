"use client";

import styles from "../layout.module.scss";
import Sidebar from "@/app/components/Sidebar";
import LogoutButton from "@/app/components/LogoutButton";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.app}>
      <Sidebar />

      <main className={styles.main}>
        <header className={styles.navbar}>
          <h3>Overview</h3>
          <LogoutButton />
        </header>

        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
}