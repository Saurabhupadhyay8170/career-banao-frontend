import MyCol from "ui/MyCol";
import "./home.css";
import MyRow from "ui/MyRow";
import MyText from "ui/MyText";
import MyFlex from "ui/MyFlex";

const Section3 = () => {
  return (
    <MyRow
      justify="center"
      gutter={24}
      className="section-3-gradient"
      align="middle"
      style={{ padding: 50 }}
    >
      {items.map((item, index) => (
        <MyCol key={index}>
          <MyFlex gap={10} vertical>
            <img style={{ height: 70 }} src={`/icons/home/${item.icon}.svg`} />
            <MyText
              style={{ width: "95%", textAlign: "center" }}
              variant="title"
              level={5}
            >
              {item.text}
            </MyText>
          </MyFlex>
        </MyCol>
      ))}
    </MyRow>
  );
};

export default Section3;

const items = [
  {
    text: "Safe and Secure",
    icon: "safeIcon",
  },
  {
    text: "24X7 Counselling Support",
    icon: "supportIcon",
  },
  {
    text: "Conducted 1 Lakh+ Sessions",
    icon: "laptopIcon",
  },
];
