import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

import { Menu, Spin } from "antd";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const [navItem, setNavItem] = useState("/home");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setNavItem(router.asPath);
  }, [router.asPath]);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

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
      <div className={styles.navigation_menu}>
        <Menu
          style={{ width: 256, height: "100%" }}
          // onClick={navOnClick}
          selectedKeys={[navItem]}
          mode="inline"
        >
          <Menu.ItemGroup title="Navigation" />
          <Menu.Item key="/">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/understanding">
            <Link href="/understanding">Understanding This Resource</Link>
          </Menu.Item>
          <Menu.Item key="/usage">
            <Link href="/usage">Using This Resource</Link>
          </Menu.Item>
          <Menu.Item key="/nlpdp">
            <Link href="/nlpdp">NLPDP</Link>
          </Menu.Item>
          <Menu.Item key="/prices">
            <Link href="/prices">Drug Prices</Link>
          </Menu.Item>
          <Menu.Item key="/contact">
            <Link href="/contact">Contact Us</Link>
          </Menu.Item>
        </Menu>
      </div>
      <main className={styles.main}>
        {loading ? (
          <div className={styles.loading}>
            <Spin tip="Loading..."></Spin>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}
