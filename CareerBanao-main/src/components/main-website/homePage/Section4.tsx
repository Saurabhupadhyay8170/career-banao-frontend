import MyCol from "ui/MyCol";
import MyFlex from "ui/MyFlex";
import MyRow from "ui/MyRow";
import MyText from "ui/MyText";

const Section4 = () => {
  return (
    <MyRow gutter={[6, 24]} justify="space-between" style={{ paddingTop: 50 }}>
      <MyCol span={24}>
        <MyRow justify="center">
          <p className="text-[1.6rem] text-center lg:text-[2.2rem] font-normal lg:font-semibold mb-[5rem]">
            CareerBanao can assist you in 3 stages.
          </p>
        </MyRow>
      </MyCol>
      {items.map((item, index) => (
        <MyCol span={24} md={7} key={index}>
          <MyFlex vertical gap={20}>
            {window.innerWidth > 766 && index % 2 !== 0 && (
              <MyFlex justify="center">
                <img src={item.image} />
              </MyFlex>
            )}
            <MyFlex align="center" justify="center" gap={5}>
              <MyText
                variant="text"
                type="secondary"
                style={{ fontSize: "3rem" }}
              >
                {index + 1}.
              </MyText>
              <MyRow justify="center">
                <MyText
                  variant="title"
                  level={4}
                  style={{ margin: 0, width: "90%", textAlign: "center" }}
                >
                  {item.title}
                </MyText>
              </MyRow>
            </MyFlex>
            <MyFlex justify="center">
              <MyText variant="text" style={{ textAlign: "center" }}>
                {item.description}
              </MyText>
            </MyFlex>
            {(window.innerWidth < 766 || index % 2 === 0) && (
              <MyFlex justify="center">
                <img src={item.image} />
              </MyFlex>
            )}
          </MyFlex>
        </MyCol>
      ))}
    </MyRow>
  );
};

export default Section4;

const items = [
  {
    title: "Connect With Our Expert",
    description: "Connect with our expert who's here to help and guide you",
    image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/1.svg",
  },
  {
    title: "Ask Your Queries?",
    description:
      "Ask your queries with our expert who’s here to help and solve your queries.",
    image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/2.svg",
  },
  {
    title: "Get Your Dream College",
    description:
      "Get admission in your dream college with the help of our expert.",
    image: "https://d2a61ob4m0n1zq.cloudfront.net/newHome/3.svg",
  },
];
