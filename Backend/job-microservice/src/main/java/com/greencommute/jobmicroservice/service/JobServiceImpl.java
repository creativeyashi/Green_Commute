package com.greencommute.jobmicroservice.service;

import com.greencommute.jobmicroservice.VO.Location;
import com.greencommute.jobmicroservice.VO.ResposneTemplateVO;
import com.greencommute.jobmicroservice.VO.Skill;
import com.greencommute.jobmicroservice.converter.JobsConverter;
import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;
import com.greencommute.jobmicroservice.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService{

    @Autowired
    private JobRepository jobRepository;

    @Autowired
    private RestTemplate restTemplate;

   @Autowired
   private JobsConverter jobsConverter;
    @Override
    public List<JobsDTO> findAll() {
        return jobsConverter.jobsEntityTodto( jobRepository.findAll()) ;
    }

    @Override
    public List<JobsDTO> findBySavedTrue() {
        return jobsConverter.jobsEntityTodto(jobRepository.findBySavedTrue());
    }

    @Override
    public Jobs saveJob(Jobs job) {
        return jobRepository.save(job);
    }

    @Override
    public void deleteJobs(String id) {
        jobRepository.deleteById((id));
    }

    @Override
    public Optional<Jobs> findById(String id) {
        return jobRepository.findById((id));
    }

    @Override
    public ResposneTemplateVO getAllDetails(String id) {
        ResposneTemplateVO vo = new ResposneTemplateVO();
        Optional<Jobs> job = jobRepository.findById(id);

        Location location= restTemplate.getForObject("http://localhost:9001/location/"+job.get().getLocation(),Location.class);

        Skill skill = restTemplate.getForObject("http://localhost:9003/skills/"+job.get().getTitle(),Skill.class);

        vo.setJob(job.get());
        vo.setLocation(location);
        vo.setSkill(skill);

        return vo;
    }
}
