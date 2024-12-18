import humanresource from "../../../assets/human_resource.png";
import cheers from "../../../assets/cheers.png";
import hands from "../../../assets/hands.png";
import help from "../../../assets/help.png";


const joinUsData = [
  {
    img: humanresource,
    title: "Fantastic Peers",
    description: "We are a team of dreaming doers who never settle. Our folks are humble and ambitious, tenacious and jolly, fast and aware.",
  },
  {
    img: cheers,
    title: "Fun Times",
    description: "Suprise Parties, Weekend Cricket, Hackathons, Festival Celebrations, Wellness Camps.. never a dull day.",
  },
  {
    img: hands,
    title: "Change The World",
    description: "We work to make the world a better place. In this epic journey, we are alaways looking for torchbearers.",
  },
  {
    img: help,
    title: "Help",
    description: "We are a team of dreaming doers who never settle. Our folks are humble and ambitious, tenacious and jolly, fast and aware.",
  }
]

function JoinUs() {
  return (
    <div className="JoinUs">
      <h2>Join us ! Why?</h2>


       <div className="join-us-container flex flex-wrap justify-evenly p-10">
        {
          joinUsData.map((data) => (
            <div className="joinus-card w-[80%] lg:w-[40%] my-5 text-center" key={data.title}>
              <div className="w-full flex justify-center items-center">
                <img src={data.img} alt="" width={"30%"} className="mix-blend-multiply" />
              </div>
              <h3>{data.title}</h3>
              <p className="text-[#999]">
                {data.description}
              </p>
            </div>
          ))
        }
      </div> 
      
    </div>
  );
}

export default JoinUs;
