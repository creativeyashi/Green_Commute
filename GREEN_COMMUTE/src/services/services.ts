import API from './API'

export const getJob = async (jobid: number) => {
  const jobs = await API.get(`/Joblist/${jobid}`)
  return jobs.data
}
