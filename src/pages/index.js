import * as React from "react";
import Layout from "../components/Layout";
import Home from "./home";

import "../styles/style.css";
import "../styles/global.css";

export default function IndexPage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

