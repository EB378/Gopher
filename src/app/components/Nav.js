import styles from './Nav.module.css'
import Logo from "./Logo";
import Link from 'next/link'
export default function Nav() {
  return (
    <>
      <div className={styles.topnav}>
          <Logo />
          <Link href="/">Imperium</Link>
          <Link href="/news">News</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/testamonials">Testamonials</Link>
      </div>
    </>  
  )
}