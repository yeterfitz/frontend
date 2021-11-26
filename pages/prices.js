import styles from "../styles/Home.module.css";
import { Table } from "antd";
import "antd/dist/antd.css";
import {
  columns,
  organizeRawData,
  organizeCategoryData,
} from "../helper/datasource";
import React, { useState, useEffect, useRef } from "react";
import Filters from "../components/Filters";

export default function Prices({ drugs, drugCategories }) {
  const [dataSource, setDataSource] = useState([]);
  const [treeData, setTreeData] = useState([]);
  const [categorySelected, setCategorySelected] = useState(undefined);
  const [categoryDataCached, setCategoryDataCached] = React.useState([]);
  // const [loading, setLoading] = useState(true);

  const allData = useRef([]);

  //Once on initialization
  useEffect(() => {
    const organizedData = organizeRawData(drugs);
    setDataSource(organizedData);
    setCategoryDataCached(organizedData);
    allData.current = organizedData;
    setTreeData(organizeCategoryData(drugCategories));
  }, []);

  // useEffect(() => {
  //   if (dataSource.length !== 0) {
  //     setLoading(false);
  //   }
  // }, [dataSource]);

  return (
    <div className={styles.inner_main}>
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
        // loading={loading}
        bordered
      />
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
