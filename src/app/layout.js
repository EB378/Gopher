import "./globals.css";
import styles from "@/app/page.module.css";
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Gopher LLC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </head>
      <body>
        <Nav />
        <main className={styles.main}>
          <div className="App">
            {children}
          </div>
        </main>
        <Footer/>
      </body>
    </html>
  );
}