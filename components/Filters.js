import React, { useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import SearchFilter from "./SearchFilter";
import { TreeSelect, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default function Filters({
  treeData,
  allData,
  setDataSource,
  categorySelected,
  setCategorySelected,
  categoryDataCached,
  setCategoryDataCached,
}) {
  const [searchFilter, setSearchFilter] = React.useState("");

  const treeDataOnChange = (value) => {
    if (typeof value === "undefined") {
      setCategorySelected("All");
    } else {
      setCategorySelected(value);
    }
  };

  const filterCategory = () => {};

  useEffect(() => {
    setSearchFilter("");
    if (categorySelected === "All") {
      setDataSource(allData.current);
      setCategoryDataCached(allData.current);
      return;
    } else {
      const newData = [];
      for (const d of allData.current) {
        const categories =
          d.main_category + "," + d.sub_category_1 + "," + d.sub_category_2;
        if (categories.includes(categorySelected)) {
          newData.push(d);
        }
      }
    }
    setCategoryDataCached(newData);
    setDataSource(newData);
  }, [categorySelected]);

  return (
    <div className={styles.table_top_row}>
      <Button
        className={styles.button_link}
        type="link"
        href="/pdf/DrugPriceComparisonProject.pdf"
        download
      >
        Download PDF
      </Button>

      <div className={styles.table_filters}>
        <TreeSelect
          dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
          placeholder="Filter by category"
          treeData={treeData}
          onChange={treeDataOnChange}
          className={styles.category_filter}
          value={categorySelected}
          showSearch
          allowClear
          treeDefaultExpandAll
        />
        <SearchFilter
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          setDataSource={setDataSource}
          filterCategory={filterCategory}
          categoryDataCached={categoryDataCached}
        ></SearchFilter>
      </div>
    </div>
  );
}
