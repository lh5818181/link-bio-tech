import { motion } from 'framer-motion'
import styles from './StatusBadge.module.css'

export default function StatusBadge({ label = 'Open to Work', color = 'primary' }) {
  return (
    <motion.div
      className={`${styles.badge} ${styles[color]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: 'spring' }}
    >
      <motion.span
        className={styles.dot}
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className={styles.label}>{label}</span>
    </motion.div>
  )
}
