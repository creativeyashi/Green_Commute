import API from './API'

export const getJob = async (jobid: number) => {
  const jobs = await API.get(`/Joblist/${jobid}`)
  return jobs.data
}
export const getSkills = async () => {
  const jobs = await API.get(`/skills`)
  return jobs.data
}
export const getLocations = async () => {
  const jobs = await API.get(`/userLocation`)
  return jobs.data
}
export const getJobs = async () => {
  const jobs = await API.get(`/JobList`)
  return jobs.data
}
