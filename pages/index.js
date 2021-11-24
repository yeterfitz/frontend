import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Table, Title } from "antd";
import "antd/dist/antd.css";
import {
  columns,
  organizeRawData,
  organizeCategoryData,
} from "../helper/datasource";
import React, { useState, useEffect, useRef } from "react";
import Filters from "../components/Filters";
import Script from "next/script";

export default function Home({ drugs, drugCategories }) {
  const [dataSource, setDataSource] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [categorySelected, setCategorySelected] = useState(undefined);
  const [categoryDataCached, setCategoryDataCached] = React.useState([]);

  const allData = useRef([]);

  //Once on initialization
  useEffect(() => {
    const organizedData = organizeRawData(drugs);
    setDataSource(organizedData);
    setCategoryDataCached(organizedData);
    allData.current = organizedData;
    setTreeData(organizeCategoryData(drugCategories));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Prescription Drug Prices</title>
        <meta
          name="description"
          content="Compare the prices of prescription drug prices"
        />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
        <Filters
          treeData={treeData}
          allData={allData}
          dataSource={dataSource}
          setDataSource={setDataSource}
          categorySelected={categorySelected}
          setCategorySelected={setCategorySelected}
          categoryDataCached={categoryDataCached}
          setCategoryDataCached={setCategoryDataCached}
        ></Filters>
        <Table
          dataSource={dataSource}
          columns={columns}
          title={() => categorySelected}
          scroll={{ x: "100%" }}
          pagination={{
            showSizeChanger: dataSource.length > 10 ? true : false,
          }}
          bordered
        />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const dev = process.env.NODE_ENV !== "production";
  const endpoint = dev
    ? `http://localhost:5000`
    : `http://rxdrugs-backend-dev.us-east-1.elasticbeanstalk.com`;
  const drugsRes = await fetch(endpoint + `/drugs`);
  const drugs = await drugsRes.json();

  const drugCategoriesRes = await fetch(endpoint + `/drugCategories`);
  const drugCategories = await drugCategoriesRes.json();

  return {
    props: {
      drugs,
      drugCategories,
      fallback: false,
    },
    revalidate: 86400,
  };
};
