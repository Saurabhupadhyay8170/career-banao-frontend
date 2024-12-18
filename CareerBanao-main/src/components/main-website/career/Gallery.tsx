
import { Carousel } from "antd";
import useFetch from "hooks/useFetch";
import ImgSkeleton from "ui/ImgSkeleton";


function Gallery() {
  const [img,loading]:any = useFetch("/getBanner?category=job_post")
  return (
    <div className="main-container">
      <Carousel autoplay speed={1000}>
        {loading ? <ImgSkeleton/>: img?.length > 0 ? 
          img.map((data:any)=>{
            return(
              <Slider url={data.banner_link}/>      
            );
          }):
          <ImgSkeleton/>}        
      </Carousel>
    </div>
  );
}

export default Gallery;

function Slider({url}:{url:any}) {
  return (
    <div>
      <div className="gallery-layout w-full h-[250px] md:h-[450px] mb-[2rem]">
        <img src={url} alt="banner" className="object-cover w-full h-full"/>
      </div>
    </div>
  );
}



