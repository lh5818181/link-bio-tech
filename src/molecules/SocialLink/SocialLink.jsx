import { motion } from 'framer-motion'
import styles from './SocialLink.module.css'

export default function SocialLink({ href, icon, label, username, color = 'primary', delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${styles[color]}`}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ x: 4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      aria-label={label}
    >
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
        <motion.div
          className={styles.iconGlow}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.label}>{label}</span>
        {username && <span className={styles.username}>{username}</span>}
      </div>

      <div className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className={styles.scanline} />
    </motion.a>
  )
}
