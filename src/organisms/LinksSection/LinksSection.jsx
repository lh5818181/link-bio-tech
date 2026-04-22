import { motion } from 'framer-motion'
import styles from './LinksSection.module.css'
import SocialLink from '../../molecules/SocialLink/SocialLink'

export default function LinksSection({ links, title = 'Links' }) {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className={styles.sectionTag}>{'// '}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.sectionLine} />
      </motion.div>

      <div className={styles.list}>
        {links.map((link, i) => (
          <SocialLink key={link.label} {...link} delay={0.1 + i * 0.08} />
        ))}
      </div>
    </section>
  )
}
