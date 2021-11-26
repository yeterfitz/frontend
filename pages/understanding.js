import styles from "../styles/Home.module.css";
import { Typography, Space, Table, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const dataSource = [
  {
    key: "1",
    cost_structure: "Retail Drug Cost",
    generic_drugs:
      "Set by pan-Canadian Tiered Pricing Framework, listed on NIDPF",
    product: `"Factory gate price" set nationally by the PMPRB for patented products. No limits on non-formulary products, whether generic or 'branded'`,
    nf_drugs: "No price control",
    payment_structure:
      "May be partially or fully covered by NLPDP or private insurance",
  },
  {
    key: "2",
    cost_structure: "Mark-up",
    generic_drugs: "Included in the NIDPF list price",
    product: "Set by individual pharmacy",
    nf_drugs: "Set by individual pharmacy",
    payment_structure: "As above",
  },
  {
    key: "3",
    cost_structure: "Dispensing/Professional Fee",
    generic_drugs: "Set by individual pharmacy",
    product: "Set by individual pharmacy",
    nf_drugs: "Set by individual pharmacy",
    payment_structure: "As above",
  },
];

const columns = [
  {
    title: "Cost Structure",
    dataIndex: "cost_structure",
    key: "cost_structure",
  },
  {
    title: "Generic Drugs",
    dataIndex: "generic_drugs",
    key: "generic_drugs",
  },
  {
    title: "Patented/Branded Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Non-Formulary Drugs",
    dataIndex: "nf_drugs",
    key: "nf_drugs",
  },
  {
    title: "Payment Structure",
    dataIndex: "payment_structure",
    key: "payment_structure",
  },
];

export default function Understanding() {
  return (
    <div className={styles.main_intro}>
      <div className={styles.inner_main_intro}>
        <article>
          <Space direction="vertical">
            <Title>Understanding Drug Prices</Title>
            <Paragraph style={{ textIndent: "2rem" }}>
              In Canada, limits on the whole sale prices of patented drugs
              (i.e., original branded products) are set nationally by the
              Patented Medicines Prices Review Board (PMPRB) to ensure that
              these are not excessive.<sup>14</sup> These limits apply to both
              prescription and overthe-counter medications. Patented products
              must be sold by the patentee at or below the limits set by PMPRB.
              However, the PMPRB does not have any influence over how much
              wholesalers or individual pharmacies may charge. Of note, patents
              last 20 years in Canada and once a drug patent expires, PMPRB no
              longer has jurisdiction over its pricing.
            </Paragraph>
            <Paragraph style={{ textIndent: "2rem" }}>
              Prices of most generic drugs, i.e. those that are no longer under
              a patent, are set individually by provinces but coordinated
              nationally for the most part through the pan-Canadian Tiered
              Pricing Framework (TPF).<sup>15</sup> In Newfoundland and
              Labrador, generic drug prices must be sold at the retail price
              (usually calculated per tablet, per gram, or per ml) listed in the
              NIDPF. The pharmacy’s mark-up is included within the retail price
              listed in the NIDPF and this document. Of not, some drugs are not
              included in provincial formularies even though they are no longer
              under a patent.
            </Paragraph>
            <Paragraph style={{ textIndent: "2rem" }}>
              In addition to the drug cost, patients pay a dispensing fee for
              each drug. There are no restrictions on how much a pharmacy may
              charge for dispensing drugs. In the case of many commonly used
              generic drugs, i.e., Metformin, the actual cost of the drug may be
              much lower than the dispensing fees. However, usually pharmacies
              charge cash paying customers at the same or similar rates to those
              negotiated by NLPDP or private insurers
            </Paragraph>
            <Table
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: "100%" }}
              title={() => "Price Structure for Generic Drugs"}
              pagination={false}
              bordered
            />
            <Divider />
            <Text style={{ fontSize: "12px" }}>
              <sup>14</sup> Patented Medicines Product Review Board. Frequently
              Asked Questions. Updated April 18, 2018. Accessed November 15,
              2021.{" "}
              <a
                href="http://pmprbcepmb.gc.ca/about-us/frequently-asked-questions#1391"
                target="_blank"
                rel="noreferrer"
              >
                http://pmprbcepmb.gc.ca/about-us/frequently-asked-questions#1391
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>15</sup> Pan-Canadian Pharmaceutical Alliance. Generic Drugs.
              pCPA website. Accessed November 17, 2021.{" "}
              <a
                href="https://www.pcpacanada.ca/generic-drug-framework"
                target="_blank"
                rel="noreferrer"
              >
                https://www.pcpacanada.ca/generic-drug-framework
              </a>
            </Text>
          </Space>
        </article>
      </div>
    </div>
  );
}
