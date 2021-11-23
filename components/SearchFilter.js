import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchFilter({
  searchFilter,
  setSearchFilter,
  setDataSource,
  categoryDataCached,
}) {
  const typingTimeout = useRef(null);
  const searchFilterOnChange = (e) => {
    const searchVal = e.target.value.toLowerCase();
    setSearchFilter(searchVal);

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      const newData = [];
      if (searchVal === "") {
        setDataSource(categoryDataCached);
        return;
      }
      for (const d of categoryDataCached) {
        if (
          d.generic_name.toLowerCase().includes(searchVal) ||
          d.brand_name.toLowerCase().includes(searchVal)
        ) {
          newData.push(d);
        }
      }
      setDataSource(newData);
    }, 500);
  };
  return (
    <Input
      prefix={<SearchOutlined />}
      className={styles.search_filter}
      onChange={searchFilterOnChange}
      value={searchFilter}
      maxLength={32}
    />
  );
}
