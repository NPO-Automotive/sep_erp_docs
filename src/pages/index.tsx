import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div style={{ marginTop: '150px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 45%', minWidth: '300px', textAlign: 'center' }}>
            <Link className="button button--secondary button--lg" to="/docs/category/требования">
              Требования
            </Link>
            <p>Документация по требованиям проекта</p>
          </div>
          <div style={{ flex: '1 1 45%', minWidth: '300px', textAlign: 'center' }}>
            <Link className="button button--secondary button--lg" to="/docs/category/тест-кейсы">
              Тест Кейсы
            </Link>
            <p>Шаблоны и примеры тест-кейсов</p>
          </div>
          <div style={{ flex: '1 1 45%', minWidth: '300px', textAlign: 'center' }}>
            <Link className="button button--secondary button--lg" to="/docs/category/описание-багов">
              Описание багов
            </Link>
            <p>Соглашение описания багов в проекте</p>
          </div>
          <div style={{ flex: '1 1 45%', minWidth: '300px', textAlign: 'center' }}>
            <Link className="button button--secondary button--lg" to="/docs/category/tutorial---basics">
              Tutorial - Basics
            </Link>
            <p>Основы работы с Docusaurus</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}