import { motion } from 'framer-motion'
import styles from './TechStack.module.css'
import Tag from '../../atoms/Tag/Tag'

export default function TechStack({ skills }) {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <span className={styles.sectionTag}>{'// '}</span>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <div className={styles.sectionLine} />
      </motion.div>

      <div className={styles.grid}>
        {skills.map((group, gi) => (
          <div key={group.category} className={styles.group}>
            <span className={styles.category}>{group.category}</span>
            <div className={styles.tags}>
              {group.items.map((item, i) => (
                <Tag
                  key={item}
                  label={item}
                  variant={gi === 0 ? 'primary' : 'default'}
                  delay={0.3 + gi * 0.05 + i * 0.04}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
