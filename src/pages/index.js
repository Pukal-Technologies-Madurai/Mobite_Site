import * as React from "react";
import Layout from "../components/Layout";
import Home from "./home";

import "../styles/style.css";
import "../styles/global.css";
import { SEO } from "../components/seo";

export default function IndexPage() {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export const Head = () => <SEO title="Home" />;
