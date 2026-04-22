import { motion } from 'framer-motion'
import styles from './ProjectCard.module.css'
import Tag from '../../atoms/Tag/Tag'

export default function ProjectCard({ title, description, tags = [], href, hrefLabel = 'Ver projeto', delay = 0 }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <div className={styles.dots}>
            <span className={styles.dot} style={{ background: '#ff5f57' }} />
            <span className={styles.dot} style={{ background: '#ffbd2e' }} />
            <span className={styles.dot} style={{ background: 'var(--color-primary)' }} />
          </div>
          <span className={styles.filename}>project.tsx</span>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          {tags.map((tag, i) => (
            <Tag key={tag} label={tag} variant="default" delay={delay + 0.05 * i} />
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cta}
        >
          <span className={styles.ctaPrompt}>$</span>
          <span>{hrefLabel}</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={styles.ctaArrow}>
            <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </motion.div>
  )
}
