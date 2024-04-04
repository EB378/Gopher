import styles from "@/app/page.module.css";
import Nav from '@/app/components/Nav';
import "@/app/globals.css";
import styles1 from '@/app/components/Box1.module.css'

export default () => (
    <>
        <main className={styles.main}>
            <div require className="App">
                <header className="App-header">
                    <Nav/>
                    <div className={styles1.oa1}>
                        <h2>The company is new. <br/>The expertise in true resilience is multifold. <br/>— CEO</h2>
                    </div>
                </header>
            </div>
        </main>
    </>
);