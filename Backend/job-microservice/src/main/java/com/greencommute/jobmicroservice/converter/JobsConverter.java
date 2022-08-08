package com.greencommute.jobmicroservice.converter;

import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class JobsConverter {
    public JobsDTO jobsEntityTodto(Jobs jobs){
        JobsDTO jobsDTO = new JobsDTO();
        jobsDTO.setId(jobs.getId());
        jobsDTO.setTitle(jobs.getTitle());
        jobsDTO.setCompanyName(jobs.getCompanyName());
        jobsDTO.setCompanyIcon(jobs.getCompanyIcon());
        jobsDTO.setLocation(jobs.getLocation());
        jobsDTO.setTime(jobs.getTime());
        jobsDTO.setDistance(jobs.getDistance());
        jobsDTO.setRole(jobs.getRole());
        jobsDTO.setCategory(jobs.getCategory());
        jobsDTO.setSaved(jobs.isSaved());
        jobsDTO.setDescription(jobs.getDescription());
        jobsDTO.setAboutTheCompany(jobs.getAboutTheCompany());
        return jobsDTO;
    }
    public List<JobsDTO> jobsEntityTodto(List<Jobs> jobs){
        return jobs.stream().map(this::jobsEntityTodto).collect(Collectors.toList());
    }

    public Jobs jobsDtoEntityTojobs(JobsDTO jobsDTO){
        Jobs jobs = new Jobs();
        jobs.setId(jobsDTO.getId());
        jobs.setTitle(jobsDTO.getTitle());
        jobs.setCompanyName(jobsDTO.getCompanyIcon());
        jobs.setLocation(jobsDTO.getLocation());
        jobs.setTime(jobsDTO.getTime());
        jobs.setDistance(jobsDTO.getDistance());
        jobs.setRole(jobsDTO.getRole());
        jobs.setCategory(jobsDTO.getCategory());
        jobs.setSaved(jobsDTO.isSaved());
        jobs.setDescription(jobsDTO.getDescription());
        jobs.setAboutTheCompany(jobsDTO.getAboutTheCompany());
        return jobs;
    }
    public List<Jobs> jobsDtoEntityTojobs(List<JobsDTO> jobs){
        return jobs.stream().map(this::jobsDtoEntityTojobs).collect(Collectors.toList());
    }
}
