import styles from './About1.module.css'
export default function Logo() {
  return (
    <div className={styles.oa2}>
      <img require src="./BenniAlexanderFace.jpeg" alt="Netlify Logo" className={styles.Face} />
      <h2>Benni Alexander, CEO</h2>
      <h5 className={styles.quotes}>"The Gopher approach is guaranteed results. We have worked for over a decade gathering real life examples of what happens when companies take <a href="#home" className={styles.a}>Business continuity</a> seriously, vs when they don't."</h5>
    </div>
  )
}