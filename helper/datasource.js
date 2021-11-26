import { Tag } from "antd";

const dosingColorMap = {
  QD: "#ffa39e",
  QID: "#ffbb96",
  BID: "#d3adf7",
  TID: "#ffd591",
  PRN: "#eaff8f",
  Q1weekly: "#b7eb8f",
  Q2weekly: "#b7eb8f",
  Q4weekly: "#b7eb8f",
  Q1monthly: "#91d5ff",
  Q3monthly: "#91d5ff",
  Q6monthly: "#91d5ff",
  Q5yearly: "#87e8de",
  Once: "#adc6ff",
  "Single dose": "#adc6ff",
  Annual: "#ffe58f",
  "2x/week": "#ffadd2",
  "N/A": "",
};

const coverageColorMap = {
  Open: "success",
  SA: "processing",
  "N/A": "",
};

export const columns = [
  {
    title: "Generic Name",
    dataIndex: "generic_name",
    key: "generic_name",
  },
  {
    title: "Brand Name",
    dataIndex: "brand_name",
    key: "brand_name",
  },
  {
    title: "Strength",
    dataIndex: "strength",
    key: "strength",
  },
  {
    title: "Dosing",
    dataIndex: "dosing",
    key: "dosing",
    // render: (dosing) => <Tag color={dosingColorMap[dosing]}>{dosing}</Tag>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Generic Price",
    dataIndex: "generic_price",
    key: "generic_price",
  },
  {
    title: "Branded Price",
    dataIndex: "branded_price",
    key: "branded_price",
  },
  {
    title: "Coverage",
    dataIndex: "coverage",
    key: "coverage",
    // render: (coverage) => (
    //   <Tag color={coverageColorMap[coverage]}>{coverage}</Tag>
    // ),
  },
];

export const organizeRawData = (rawData) => {
  const organizedData = [];
  for (const rd of rawData) {
    const data = {
      key: rd.id,
      generic_name: rd.generic_name,
      brand_name: rd.brand_name,
      strength: rd.strength,
      dosing: rd.dosing_name,
      quantity: rd.quantity,
      generic_price: "$" + rd.generic_price,
      branded_price: "$" + rd.branded_price,
      coverage: rd.coverage_name,
      main_category: rd.main_category,
      sub_category_1: rd.sub_category_1,
      sub_category_2: rd.sub_category_2,
    };
    organizedData.push(data);
  }
  return organizedData;
};

export const organizeCategoryData = (categoryData) => {
  const organizedData = [
    {
      title: "All",
      value: "All",
      children: [],
    },
  ];
  for (const cd of categoryData) {
    let mainCategoryExists = false;
    let mainCategory = null;
    for (const od of organizedData) {
      if (od.title === cd.main_category) {
        mainCategoryExists = true;
        mainCategory = od;
        break;
      }
    }

    if (!mainCategoryExists && cd.main_category !== "") {
      mainCategory = {
        title: cd.main_category,
        value: cd.main_category,
        children: [],
      };
      organizedData.push(mainCategory);
    }

    if (mainCategory !== null) {
      let subCategory1Exists = false;
      let subCategory1 = null;
      for (const sc1 of mainCategory.children) {
        if (sc1.title === cd.sub_category_1) {
          subCategory1Exists = true;
          subCategory1 = sc1;
          break;
        }
      }

      if (!subCategory1Exists && cd.sub_category_1 !== "") {
        subCategory1 = {
          title: cd.sub_category_1,
          value: cd.sub_category_1,
          children: [],
        };
        mainCategory.children.push(subCategory1);
      }
    }

    if (subCategory1 !== null) {
      let subCategory2Exists = false;
      for (const sc2 of subCategory1.children) {
        if (sc2.title === cd.sub_category_2) {
          subCategory2Exists = true;
          break;
        }
      }

      if (!subCategory2Exists && cd.sub_category_2 !== "") {
        subCategory1.children.push({
          title: cd.sub_category_2,
          value: cd.sub_category_2,
          children: [],
        });
      }
    }

    //   for (const sc1 of mainCategory.children) {
    //     let subCategory1Exists = false;
    //     let subCategory1 = null;
    //     if (sc1.title === cd.sub_category_1) {
    //       subCategory1Exists = true;
    //       subCategory1 = sc1;
    //       break;
    //     }
    //   }
    //   if (subCategory1Exists && subCategory1 !== null) {
    //     for (const sc2 of subCategory1.children) {
    //       let subCategory2Exists = false;
    //       if (sc2.title === cd.sub_category_2) {
    //         subCategory2Exists = true;
    //         break;
    //       }
    //     }
    //     if (!subCategory2Exists) {
    //       subCategory1.children.push({
    //         title: cd.sub_category_2,
    //         value: cd.sub_category_2,
    //         children: [],
    //       });
    //     }
    //   } else {
    //     mainCategory.children.push({
    //       title: cd.sub_category_1,
    //       value: cd.sub_category_1,
    //       children: [],
    //     });
    //   }

    // organizedData.push(data);
  }
  //   console.log(categoryData);

  //   console.log(organizedData);
  return organizedData;
};
