import styles from "@/app/page.module.css";
import Nav from '@/app/components/Nav';
import "@/app/globals.css";

export default () => (
    <>
        <main className={styles.main}>
            <div require className="App">
                <header className="App-header">
                    <Nav/>
                </header>
                <p>Testamonials</p>
            </div>
        </main>
    </>
);