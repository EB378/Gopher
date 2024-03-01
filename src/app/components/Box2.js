import styles from './Box2.module.css'
export default function Logo() {
  return (
    <div className={styles.oa2}>
      <img require src="./BenniAlexanderFace.jpeg" alt="Netlify Logo" className={styles.Face} />
      <h2>Benni Alexander, CEO</h2>
      <h5 className={styles.quotes}>"The Gopher aproach is garanteed results. We have worked for over a dacade gathering real life examples of what happens when companies take Business continuity serously, vs when they don't."</h5>
    </div>
  )
}