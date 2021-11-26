import styles from "../styles/Home.module.css";
import { Typography, Space } from "antd";

const { Title, Text } = Typography;

export default function Contact() {
  return (
    <div className={styles.main_intro}>
      <div className={styles.inner_main_intro}>
        <article>
          <Space direction="vertical">
            <Title>Contact Us</Title>
            <Text>
              Email us at <a>khan.hasnain243@gmail.com</a> if you have any
              questions or comments.
            </Text>
          </Space>
        </article>
      </div>
    </div>
  );
}
