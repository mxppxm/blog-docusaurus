import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import propTypes from "prop-types";
import "antd/dist/antd.css";
import "moment/locale/zh-cn";

const features = [
  {
    title: "文档",
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: "各种实用文档",
  },
  {
    title: "博客",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: "带有个人看法的知识与见解分享",
  },
  {
    title: "百宝箱",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: "各种实用小工具",
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={ classnames("col col--4", styles.feature) }>
      { imgUrl && (
        <div className="text--center">
          <img className={ styles.featureImage } src={ imgUrl } alt={ title } />
        </div>
      ) }
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}
Feature.propTypes = {
  imageUrl: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={ `Hello from ${siteConfig.title}` }
      description="Description will go into a meta tag in <head />"
    >
      <header className={ classnames("hero hero--primary", styles.heroBanner) }>
        <div className="container">
          <h1 className="hero__title">{ siteConfig.title }</h1>
          <p className="hero__subtitle">{ siteConfig.tagline }</p>
          <div className={ styles.buttons }>
            <Link
              className={
                classnames(
                  "button button--outline button--secondary button--lg",
                  styles.getStarted,
                )
              }
              to={ useBaseUrl("docs/doc1") }
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        { features && features.length &&
        (
          <section className={ styles.features }>
            <div className="container">
              <div className="row">
                { features.map((props, idx) => (
                  <Feature key={ idx } { ...props } />
                )) }
              </div>
            </div>
          </section>
        ) }
      </main>
    </Layout>
  );
}

export default Home;
