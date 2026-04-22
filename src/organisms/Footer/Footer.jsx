import { motion } from 'framer-motion'
import styles from './Footer.module.css'

export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <span className={styles.line}>
        <span className={styles.prompt}>{'>'}</span>
        <span className={styles.text}>
          built by <span className={styles.highlight}>{name}</span>
        </span>
      </span>
      <span className={styles.copy}>© {year}</span>
    </motion.footer>
  )
}
