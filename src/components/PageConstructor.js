import React from "react";
import Layout from "@theme/Layout";
import PropTypes from "prop-types";
import { Empty } from "antd";
import pcStyle from "./pageConstructor.module.css";

export default function PageConstructor(props) {
  const { options, children } = props;
  const { isEmpty = false } = options || {};

  return <Layout { ...options }>
    {
      isEmpty ?
        children :
        <div className= { pcStyle.empty }><Empty /></div>
    }
  </Layout>;
}

PageConstructor.propTypes = {
  options: PropTypes.object,
  children: PropTypes.node,
};

