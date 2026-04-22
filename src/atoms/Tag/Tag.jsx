import { motion } from 'framer-motion'
import styles from './Tag.module.css'

export default function Tag({ label, variant = 'default', delay = 0 }) {
  return (
    <motion.span
      className={`${styles.tag} ${styles[variant]}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {label}
    </motion.span>
  )
}
