import styles from "../styles/Home.module.css";
import { Typography, Space, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  return (
    <div className={styles.main_intro}>
      <div className={styles.inner_main_intro}>
        <article>
          <Space direction="vertical">
            <Title>Prescription Drug Costs in Newfoundland and Labrador</Title>
            <Title level={2}>Introduction:</Title>
            <Paragraph style={{ textIndent: "2rem" }}>
              This resource has been designed as a point-of-care reference guide
              for clinicians in Newfoundland and Labrador (NL) to quickly and
              easily access the approximate cost of drugs commonly prescribed in
              the general practice setting. It is inspired by a similar
              reference guide produced every 2 years by the Alberta College of
              Family Physicians<sup>1</sup>. The drug listings are organized by
              classes, allowing for quick comparison of drug prices within a
              class as well as their coverage status under the Newfoundland and
              Labrador Prescription Drug Program (NLPDP). It is hoped that this
              will permit clinicians and patients to make more informed
              decisions about therapeutic choices especially when patients’
              financial constraints are a significant barrier to accessing
              drugs.
            </Paragraph>
            <Title level={2} style={{ marginTop: "0.5rem" }}>
              Background and Rationale:
            </Title>
            <Paragraph style={{ textIndent: "2rem" }}>
              Prescription drug costs in Canada are an important obstacle to
              achieving equity in healthcare and pose a significant burden on
              individual patients and healthcare systems. Despite having a
              publicly funded healthcare system, drug costs in Canada remain
              among some of the highest in the world.<sup>2,3</sup> High drug
              costs can impact patients’ ability to adhere to treatment.
              <sup>4</sup> In fact, as many as one in ten Canadians have
              reported foregoing prescription medications due to high costs.
              <sup>5</sup> Similarly, drug costs pose a significant financial
              burden as illustrated by differences between immediate release and
              long acting Metformin. A recent systematic review found there to
              be no clinically relevant difference in outcomes or severity of
              adverse effects between Metformin and Metformin XR.<sup>6</sup>{" "}
              Yet in Alberta alone over 10,000 patients use long acting
              Metformin annually, which has a 10-fold higher price than the
              immediate release Metformin; changing to the latter would result
              in estimated savings of $8 million a year in that province alone.
              <sup>7</sup> However, despite the pervasiveness of ‘cost-related
              nonadherence,’ most physicians tend to have poor understanding of
              the costs of the drugs that they prescribe, even as they
              acknowledge that drug costs are an important consideration in
              their prescribing process.<sup>8</sup> In several studies, when
              physicians gained more knowledge of drug prices it resulted in
              changed behaviours and prescription of less expensive but equally
              effective drugs.<sup>9</sup> Unfortunately, the actual cost of any
              prescription drug to individual patients results from the complex
              interaction between the actual cost and the degree of insurance
              coverage, if any. In Canada, limits on the prices of original
              patented products are set nationally by Patented Medicines Prices
              Review Board (PMPRB). Following the expiration of the patent (a
              duration of 20 years), generic equivalents can be sold and the
              prices for these are set individually by provinces and
              territories. Furthermore, what an actual patient pays at the point
              of sale is determined by the degree of insurance coverage, if any,
              that they might hold. Thus, the combination of high prices and
              variety of insurance coverage makes it extremely difficult for
              clinicians to have good insight of the overall cost to patients of
              specific medications. As a result, prescribing decisions often
              occur without taking into consideration drug costs.
            </Paragraph>
            <Paragraph style={{ textIndent: "2rem" }}>
              This information vacuum needs to be addressed to ensure
              prescribing that is cost-effective for patients. One suggestion to
              address this need has been for legislation to ensure that
              provincial and territorial drug formularies are integrated into
              electronic 4 medical records (EMRs) to allow physicians to see
              drug costs during the prescribing process.<sup>10</sup> Gorfinkel
              et al have provided a blue print with three levels of increasing
              support to foster drug cost transparency: the first level would
              allow for drug costs to be visible in EMRs, second would allow the
              prices of all alternatives in the same therapeutic classes to be
              visible with costs, and finally the third would feature an alert
              system that would need to be overridden by the clinician to
              prescribe a drug over a cheaper alternative in the same
              therapeutic class.<sup>11</sup>
              An assessment of prescription drug expenditure in 2013 by Littman
              and Halil found that cost-effective prescribing in just several
              classes would yield annual savings more than half a billion
              dollars nationally.<sup>12</sup> Therefore, given the impact that
              drug prices have on adherence, it was felt that a resource which
              allowed physicians to quickly access and compare the list prices
              of commonly used drugs would aid in cost-effective prescribing
              decisions.
            </Paragraph>
            <Divider />
            <Text style={{ fontSize: "12px" }}>
              <sup>1</sup> Kolber M, Lee J, Nickonchuk T, Korownyk C, Allan GM.
              Price Comparison of Commonly Prescribed Pharmaceuticals in Alberta
              2019. Alberta College of Family Physicians. Published March 6,
              2019. Accessed November 9, 2021.{" "}
              <a
                href="https://acfp.ca/wp-content/uploads/2019/02/ACFPPricingDoc2019.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://acfp.ca/wp-content/uploads/2019/02/ACFPPricingDoc2019.pdf
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>2</sup> Rotermann M, Sanmartin C, Hennessy D, Arthur M.
              Prescription medication use by Canadians aged 6 to 79. Statistics
              Canada; 2015. Updated November 2015. Accessed November 15, 2021.{" "}
              <a
                href="https://www.statcan.gc.ca/pub/82-003-x/2014006/article/14032-eng.htm"
                target="_blank"
                rel="noreferrer"
              >
                https://www.statcan.gc.ca/pub/82-003-x/2014006/article/14032-eng.htm
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>3</sup> Canadian Institute for Health Information. Prescribed
              Drug Spending in Canada, 2018: A Focus on Public Drug Programs.
              CIHI website. Published 2018. Accessed November 15, 2021.{" "}
              <a
                href="https://www.cihi.ca/sites/default/files/document/pdex-report-2018-en-web.pdf"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cihi.ca/sites/default/files/document/pdex-report-2018-en-web.pdf
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>4</sup> Law MR, Cheng L, Kolhatkar A, et al. The consequences
              of patient charges for prescription drugs in Canada: a
              cross-sectional survey. CMAJ Open. 2018;6(1):E63-E70.
              doi:10.9778/cmajo.20180008.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>5</sup> Hennessy D, Sanmartin C, Ronksley P, et al.
              Out-of-pocket spending on drugs and pharmaceutical products and
              cost-related prescription non-adherence among Canadians with
              chronic disease. Statistics Canada. Published Jyly 12, 2017.
              Accessed November 9, 2021.{" "}
              <a
                href="https://www150.statcan.gc.ca/n1/pub/82-003-x/2016006/article/14634-eng.htm"
                target="_blank"
                rel="noreferrer"
              >
                https://www150.statcan.gc.ca/n1/pub/82-003-x/2016006/article/14634-eng.htm
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>6</sup> Abrilla AA, Pajes ANNI, Jimeno CA. Metformin
              extended-release versus metformin immediate-release for adults
              with type 2 diabetes mellitus: A systematic review and
              meta-analysis of randomized controlled trials. Diabetes Res Clin
              Pract. 2021;178:108824. doi:10.1016/j.diabres.2021.108824
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>7</sup> Korownik T, Lindbald A, Kolber M. PEER: What’s new,
              what’s true & what’s poo. Virtual Family Medicine Forum. November
              11, 2021
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>8</sup> Reichert S, Simon T, Halm EA. Physicians&apos;
              attitudes about prescribing and knowledge of the costs of common
              medications. Arch Intern Med. 2000;160(18):2799-2803.
              doi:10.1001/archinte.160.18.2799
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>9</sup> Hux JE, Naylor CD. Drug prices and third party
              payment: do they influence medication selection?.
              Pharmacoeconomics. 1994;5(4):343-350.
              doi:10.2165/00019053-199405040-00008
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>10</sup> Gorfinkel I, Lexchin J. We need to mandate drug cost
              transparency on electronic medical records. CMAJ.
              2017;189(50):E1541-E1542. doi:10.1503/cmaj.171070
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>11</sup> Gorfinkel I, Brown A, Lexchin JR. Engaging
              physicians to prescribe more cost-effectively: Blueprint for
              change. Can Fam Physician. 2020;66(10):723-725. Accessed November
              15, 2021.{" "}
              <a
                href="https://www.cfp.ca/content/66/10/723"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cfp.ca/content/66/10/723
              </a>
            </Text>
            <Text style={{ fontSize: "12px" }}>
              <sup>12</sup> Littman J, Halil R. Potential effects of rational
              prescribing on national health care spending. More than half a
              billion dollars in annual savings. Can Fam Physician.
              2016;62:235-44. (Eng), e146–56 (Fr). Accessed November 15, 2021.{" "}
              <a
                href="https://www.cfp.ca/content/62/3/235"
                target="_blank"
                rel="noreferrer"
              >
                https://www.cfp.ca/content/62/3/235
              </a>
            </Text>
          </Space>
        </article>
      </div>
    </div>
  );
}
