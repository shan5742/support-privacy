import React from "react";
import s from "./AboutPage.module.scss";
import { Layout } from "../../components/layout/Layout";

interface Props {}

export const AboutPage = (props: Props) => {
  return (
    <Layout>
      <h1 className={s.pageTitle}>Support Privacy</h1>
    </Layout>
  );
};
