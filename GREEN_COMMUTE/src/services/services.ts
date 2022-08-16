import axios from 'axios'

export const getJob = async (jobid: number) => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9006/jobs/${jobid}`)
    .then((res) => {
      console.log('a')
      console.log(res.data)
      return jobs.data
    })
    .catch((e) => {
      console.log('b')
      return e.response.data
    })
}
export const getSkills = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9003/skills`)
    // return jobs.data
    .then((res) => {
      console.log('a')
      console.log(res.data)
      return jobs.data
    })
    .catch((e) => {
      console.log('skill error')
      return e.response.data
    })
}
export const getLocations = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9001/location/`)
    // return jobs.data
    .then((res) => {
      console.log('a')
      console.log(res.data)
      return jobs.data
    })
    .catch((e) => {
      console.log('locationerr')
      return e.response.data
    })
}
export const getJobs = async () => {
  const jobs: any = await axios
    .get(`http://3.134.81.172:9006/jobs/`)
    .then((res) => {
      console.log('a')
      console.log(res.data)
      return jobs.data
    })
    .catch((e) => {
      console.log('job error')

      return e.response.data
    })
}
