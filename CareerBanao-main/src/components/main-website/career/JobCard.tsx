import { Link } from "react-router-dom";

function JobCard({ data }: any) {
  return (
    <div className="JobCard">
      <div className="jobcard-container">
        <div className="jobcard-left">
          <h2>{data.job_title}</h2>
          <p>
            Designation : <span>{data.job_designation}</span>
          </p>
          <br />
          <p>
            Total Experience : <span>{data.job_experience}</span>
          </p>
          <p>
            Industry : <span>{data.job_Industry}</span>
          </p>
        </div>

        <div className="jobcard-center">
          <p>Job Type : <span>{data.job_type}</span></p><br />
          <p>Address : <span>{data.job_address}</span></p>
          <p>Published : <span>{data.job_published}</span></p>
        </div>
        <div className="jobcard-right">
          <button className="rounded-3xl hover:bg-hoverBtn bg-primaryBtn text-sm py-[7px] px-[12px] text-white "><Link to={`/career/jobapply/${data.job_id}`}>Apply Now</Link></button>
        </div>
      </div>
    </div>
  );

}

export default JobCard;
