import styles from "../styles/Home.module.css";
import { Typography, Space, Table } from "antd";

const { Title, Paragraph, Text } = Typography;

const dataSource = [
  {
    key: 1,
    generic_name: "Atorvastatin",
    brand_name: "Lipitor",
    strength: "10mg",
    dosing: "QD",
    quantity: "30 days",
    generic_price: "$5.70",
    branded_price: "$68.78",
    coverage: "Open",
  },
];

const columns = [
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
  },
];

export default function Usage() {
  return (
    <div className={styles.main_intro}>
      <div className={styles.inner_main_intro}>
        <article>
          <Space direction="vertical">
            <Title>Using This Resource</Title>
            <Paragraph style={{ textIndent: "2rem" }}>
              The medication included in this guide are generally grouped by
              organ systems and sub-grouped by class or mechanism of action.
              This is to allow clinicians to easily determine the expected
              retail cost of the drug (excluding the dispensing fee) and the
              price differences between drugs within a class.
            </Paragraph>
            <Table
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: "100%" }}
              title={() => "Example"}
              pagination={false}
              bordered
            />
          </Space>
          <Space direction="vertical" style={{ marginTop: "1rem" }}>
            <Text>
              <strong>Generic Name:</strong> Refers to the chemical name of the
              specified drug.
            </Text>
            <Text>
              <strong>Brand Name:</strong> This is the original patented drug
              product, which may or may not be under a patent.
            </Text>
            <Text>
              <strong>Strength:</strong> This shows the various strengths that
              the drug is commonly available in.
            </Text>
            <Text>
              <strong>Dosing:</strong> This refers to the dosing frequency. In
              cases where multiple dosing frequencies exist for the same or
              multiple indications, the most commonly used indication or dosing
              schedule has been used.
            </Text>
            <Text>
              <strong>Quantity:</strong> This is the quantity (often in number
              of days) for which the price of the drug has been calculated. For
              instance, the 30-days supply of a drug that has BID dosing would
              mean 60 tablets.
            </Text>
            <Text>
              <strong>Generic Price:</strong> This is the retail drug price as
              per the NIPDF and all pharmacies in the province must sell the
              generic products (if it is in the NIPDF) at this price. It does
              not include the dispensing fee.
            </Text>
            <Text>
              <strong>Branded Price:</strong> This is the approximate price of
              branded drugs. As pharmacies can set any mark up for these
              medications, the actual cost the patient pays will likely be
              higher and will differ between pharmacies. The cost listed here is
              obtained from NIDPF/NLPDP.
            </Text>
            <Text>
              <strong>Coverage:</strong> This column indicates whether the drug
              is covered by the NLPDP. If listed as Open, then NLPDP covers the
              drug and generally with minimal or no restrictions. If ‘SA’, then
              the NLPDP requires prior special authorization for the drug to be
              completed by a physician. If using the electronic version of this
              document, then there is a link to the specific requirements on the
              NLPDP website. N/A means that the drug in question is not covered
              by the NLPDP.
            </Text>
          </Space>
        </article>
      </div>
    </div>
  );
}
