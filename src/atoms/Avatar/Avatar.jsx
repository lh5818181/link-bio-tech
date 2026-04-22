import { motion } from 'framer-motion'
import styles from './Avatar.module.css'

export default function Avatar({ name = 'L', src = null, size = 96 }) {
  const initial = name.charAt(0).toUpperCase()

  return (
    <motion.div
      className={styles.wrapper}
      style={{ width: size, height: size }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.1 }}
    >
      <motion.div
        className={styles.ring}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={styles.ringReverse}
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      <div className={styles.inner}>
        {src ? (
          <img
            src={src}
            alt={name}
            className={styles.photo}
            draggable={false}
          />
        ) : (
          <span className={styles.initial}>{initial}</span>
        )}
        <div className={styles.scanline} />
      </div>

      <motion.div
        className={styles.pulse}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}