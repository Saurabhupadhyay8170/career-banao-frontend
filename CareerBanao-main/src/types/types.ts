type ChildrenType = {
  children: React.ReactNode;
 };
 type RegisterPayloadType = {
  name: string;
  email: string;
  phone: string;
  collegename: string;
  password: string;
 };
 type LoginPayloadType = {
  email: string;
  password?: string;
 };
 
 type TestimonialType = {
  id: string;
  record_id: string;
  name: string;
  college_name: string;
  feedback: string;
  action_status: string;
  student_image: string;
  delete_status: string;
 };
 
 type AdmissionEngineeringDataType = {
  id: string;
  college_id: string;
  college_name: string;
  college_category: string;
  college_logo: string;
  college_address: string;
  Last_date: string;
  latest_news: string;
  news_event: string;
  introduction: string;
  apply_link: string;
  hide_record: string;
  delete_status: string;
  college_state: string;
  college_city: string;
 };
 
 type JobCardType = {
  id: string;
  job_title: string;
  job_id: string;
  status: string;
  job_designation: string;
  job_experience: string;
  job_Industry: string;
  job_type: string;
  job_address: string;
  job_published: string;
  delete_status: string;
 };
 
 type ApplicationConfigType = {
  id:string;
  applicatiion_name:string;
  module_name:string;
  status:string;
  modified_by:string;
  modified_date:string;
 };