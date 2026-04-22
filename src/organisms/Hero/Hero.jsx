import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Avatar from '../../atoms/Avatar/Avatar'
import StatusBadge from '../../atoms/StatusBadge/StatusBadge'
import TypewriterText from '../../atoms/TypewriterText/TypewriterText'

const ROLES = [
  'Front-End Developer',
  'React + TypeScript',
  'UI Accessibility (WCAG)',
  'Full Stack Jr.',
]

export default function Hero({ name, bio, avatar }) {
  return (
    <header className={styles.hero}>
      <motion.div
        className={styles.avatarWrap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Avatar name={name} src={avatar || null} size={96} />
      </motion.div>

      <div className={styles.info}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {name}
        </motion.h1>

        <motion.div
          className={styles.role}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          <span className={styles.prompt}>{'>'}</span>
          <TypewriterText texts={ROLES} speed={70} pause={2200} />
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          <StatusBadge label="Open to Work" color="primary" />
        </motion.div>
      </div>
    </header>
  )
}