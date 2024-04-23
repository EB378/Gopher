import "@/app/globals.css";
import RootLayout from "@/app/layout";
import styles from "@/app/page.module.css"

export default () => (
    <>
    <RootLayout>
        <div className={styles.aboutalighn}>
            <h1>About Us · The People that make us</h1>
            <br/>
            <p>Strangely, most of us in the company are known for having quite a few things in common:</p>
            <h5>
                <br/>
            · We are avid readers<br/>
            · We are continuous thinkers<br/>
            · We have real life experiences<br/>
            · We challenge thoughts and ideas, we also respect experiences<br/>
            · We get to the root of the problem
            </h5>
            <br/>
            <br/>
            <p>Often this means that we are not on par with others, often racing in our own minds and thus we have to slow down. The last one is especially difficult. Unlike a lot of consulting companies that target the symptom of the problem, we are often able to see the root of the problem, and that helps us to solve the problem better.</p>
        </div>
    </RootLayout>
    </>
);