import { motion } from 'framer-motion'
import styles from './BioPage.module.css'

import CyberBackground from '../../atoms/CyberBackground/CyberBackground'
import Hero from '../../organisms/Hero/Hero'
import LinksSection from '../../organisms/LinksSection/LinksSection'
import TechStack from '../../organisms/TechStack/TechStack'
import Footer from '../../organisms/Footer/Footer'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'

import { CONFIG, LINKS, TECH_STACK, FEATURED_PROJECT } from '../../data/config'

export default function BioPage() {
  return (
    <div className={styles.page}>
      <CyberBackground />

      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top bar */}
        <div className={styles.topBar}>
          <span className={styles.topBarDot} />
          <span className={styles.topBarText}>
            {CONFIG.location}
          </span>
          <span className={styles.topBarSep}>·</span>
          <span className={styles.topBarText} style={{ color: 'var(--color-primary)' }}>
            online
          </span>
        </div>

        {/* Hero */}
        <Hero
          name={CONFIG.name}
          title={CONFIG.title}
          bio={CONFIG.bio}
          avatar={CONFIG.avatar}
        />

        {/* Social Links */}
        <LinksSection links={LINKS.social} title="Redes Sociais" />

        {/* Contact Links */}
        <LinksSection links={LINKS.contact} title="Contato" />

        {/* Featured Project */}
        <section className={styles.projectSection}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className={styles.sectionTag}>{'// '}</span>
            <h2 className={styles.sectionTitle}>Projeto em Destaque</h2>
            <div className={styles.sectionLine} />
          </motion.div>

          <ProjectCard {...FEATURED_PROJECT} delay={0.3} />
        </section>

        {/* Tech Stack */}
        <TechStack skills={TECH_STACK} />

        {/* Footer */}
        <Footer name={CONFIG.shortName || CONFIG.name} />
      </motion.main>
    </div>
  )
}
