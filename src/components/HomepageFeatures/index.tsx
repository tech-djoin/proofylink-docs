import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  link: string;
  tag?: string; // Tambahan untuk label kecil seperti di gambar
};

const topFeatures: FeatureItem[] = [
  // { title: 'Personal', image: 'img/logo.png', link: "", description: 'For individual users and learners.' },
  // { title: 'Business', image: 'img/logo.png', link: "", description: 'For teams and growing companies.' },
  { title: 'Perusahaan', image: 'img/logo.png', link: "/docs/category/enterprise" ,description: 'Solusi khusus untuk organisasi besar.' },
];

const apiFeature: FeatureItem = {
  title: 'Integrasi API',
  image: 'img/logo.png',
  link: "/docs/enterprise/api-reference/api-overview",
  tag: 'DEVELOPER',
  description: 'Integrasikan standarisasi tepercaya kami dengan mudah ke dalam alur kerja dan platform Anda yang sudah ada.',
};

function Feature({title, image, description, link, tag, isFull}: FeatureItem & {isFull?: boolean}) {
  return (
    <Link to={link} className={clsx(styles.cardWrapper)}> 
      <div className={clsx(styles.card, isFull && styles.cardFull)}>
        <div className={styles.cardHeader}>
          <img src={image} alt={title} className={styles.featureImg} />
          {tag && <span className={styles.cardTag}>{tag}</span>}
        </div>
        <div className={styles.cardBody}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <span className={styles.learnMore}>Learn more →</span>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* GRID ATAS - 3 KOLOM */}
        <div className={styles.mainGrid}>
          {topFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* GRID BAWAH - API (FULL WIDTH) */}
        <div className={styles.apiSection}>
          <p className={styles.subHeading}>ALAT DEVELOPER</p>
          <div className={styles.apiGrid}> 
            <Feature {...apiFeature} /> 
          </div>
        </div>
      </div>
    </section>
  );
}