import "./globals.css";
import styles from "./layout.module.scss";
import Sidebar from "@/app/components/Sidebar";
import LogoutButton from "@/app/components/LogoutButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.app}>
          
          {/* SIDEBAR */}
          <Sidebar />

          {/* MAIN */}
          <main className={styles.main}>
            
            <header className={styles.navbar}>
              
              <LogoutButton />
            </header>

            <div className={styles.content}>
              {children}
            </div>

          </main>
        </div>
      </body>
    </html>
  );
}