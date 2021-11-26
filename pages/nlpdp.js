import styles from "../styles/Home.module.css";
import { Typography, Space, Table, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const dataSource = [
  {
    key: "1",
    plan_name: "The Foundation Plan",
    eligibility: [
      "Persons and families in receipt of income support benefits through Dept of Advanced Education & Skills",
    ],
    application_process:
      "Automatically issued when patient is in receipt of income support benefits",
    coverage: "100% of eligible prescriptions",
  },
  {
    key: "2",
    plan_name: "The 65Plus Plan",
    eligibility: [
      "Persons in receipt of Old Age Security Benefits (OAS) and the Guaranteed Income Supplement (GIS)",
    ],
    application_process:
      "Automatically issued when Dept of Health & Community Services notified by Service Canada that an individual is in receipt of OAS/GIS",
    coverage:
      "Coverage of eligible prescription drugs. Beneficiaries pay dispensing fee up to $6",
  },
  {
    key: "3",
    plan_name: "The Access Plan",
    eligibility: [
      "Individuals and Families with low income:",
      "- Families with children, including single parents with net annual income of $42,870 or less",
      "- Couples without children with net annual incomes of $30,000 or less",
      "- Single individuals with net annual incomes of $27,151 or less",
    ],
    application_process:
      "Application required. Patients can call 1-888-859-3535 for further information",
    coverage:
      "Amount of coverage determined by net income level and family status",
  },
  {
    key: "4",
    plan_name: "The Assurance Plan",
    eligibility: [
      "Coverage for individuals or families, even if they have private insurance, when eligible drug costs exceed:",
      "- 5% of net income for those earning below $40,000",
      "- 7.5% of net income for those earning between $40,000-$75,000",
      "- 10% of net income for those earning between $75,000-$150,000",
    ],
    application_process:
      "Application required. Patients can call 1-888-859-3535 for further information",
    coverage:
      "Beneficiaries responsible for co-payment depending on income levels and eligible drug’s cost.",
  },
  {
    key: "5",
    plan_name: "The Select Needs Plan",
    eligibility: [
      "NL residents with Cystic Fibrosis and Growth Hormone Deficiency",
    ],
    application_process:
      "No application necessary. DHCS notified by Eastern Health when diagnosis of CF or GHD is made",
    coverage: "100% coverage for disease specific medications and supplies",
  },
];

const columns = [
  {
    title: "Plan Name",
    dataIndex: "plan_name",
    key: "plan_name",
  },
  {
    title: "Eligibility",
    dataIndex: "eligibility",
    key: "eligibility",
    render: (text) => (
      <span>
        {text.map((t) => (
          <p style={{ marginBottom: "0" }} key={t}>
            {t}
          </p>
        ))}
      </span>
    ),
  },
  {
    title: "Application Process",
    dataIndex: "application_process",
    key: "application_process",
  },
  {
    title: "Coverage",
    dataIndex: "coverage",
    key: "coverage",
  },
];

export default function NLPDP() {
  return (
    <div className={styles.main_intro}>
      <div className={styles.inner_main_intro}>
        <article>
          <Space direction="vertical">
            <Title>
              The Newfoundland and Labrador Prescription Drug Program
            </Title>
            <Paragraph>
              This program provides variable degrees of prescription drug
              coverage for those residents of NL who otherwise do not have any
              other third-party coverage i.e. private insurance.<sup>16</sup>
            </Paragraph>
            <Table
              dataSource={dataSource}
              columns={columns}
              scroll={{ x: "100%" }}
              pagination={false}
              bordered
            />
            <Divider />
            <Text style={{ fontSize: "12px" }}>
              <sup>16</sup> Newfoundland and Labrador Department of Health and
              Community Services. Prescription Drug Program (NLPDP) Plan
              Overview. Accessed November 8, 2021.{" "}
              <a
                href="https://www.gov.nl.ca/hcs/prescription/nlpdp-plan-overview/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.gov.nl.ca/hcs/prescription/nlpdp-plan-overview/
              </a>
            </Text>
          </Space>
        </article>
      </div>
    </div>
  );
}
