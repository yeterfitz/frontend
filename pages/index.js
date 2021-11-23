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

export default function Home({ drugs, drugCategories }) {
  const [dataSource, setDataSource] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [categorySelected, setCategorySelected] = useState("All");
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
        <title>Create Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>

      <main className={styles.main}>
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
          bordered
        />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const drugsRes = await fetch(`http://localhost:10000/drugs`);
  const drugs = await drugsRes.json();

  const drugCategoriesRes = await fetch(
    `http://localhost:10000/drugCategories`
  );
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
