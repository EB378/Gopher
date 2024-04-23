import styles from './Footer.module.css'
export default function Footer() {
  return (
    <>
        <footer className={styles.App_footer}>
        <img src='/Gopher.png' alt="Netlify Logo" href="#home" className={styles.flogo} />
          <p>Gopher LLC</p>
        </footer>
    </>  
  )
}