 package com.greencommute.jobmicroservice.controller;

import com.greencommute.jobmicroservice.VO.ResposneTemplateVO;
import com.greencommute.jobmicroservice.converter.JobsConverter;
import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;
import com.greencommute.jobmicroservice.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/jobs")
@CrossOrigin(origins = "http://localhost:8080")
public class JobController {

    private JobService jobService;

    @Autowired
    private JobsConverter jobsConverter;

    @Autowired
    public JobController(JobService jobService){
        this.jobService = jobService;
    }

    @GetMapping("/")
    public List<JobsDTO> listJobs(){
        return jobService.findAll();
    }

    @GetMapping("/savedJobs")
    public List<JobsDTO> getSavedJob() {
        List<JobsDTO> savedJobs = jobService.findBySavedTrue();
        return savedJobs;
    }

    @PutMapping("/{id}")
    public ResponseEntity<Jobs> saveJob(@RequestBody Jobs job )
    {

        return new ResponseEntity<>(jobService.saveJob(job), HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Jobs> addSavedJobs(@RequestBody JobsDTO jobsDTO )
    {
        Jobs job= jobsConverter.jobsDtoEntityTojobs(jobsDTO);
        return new ResponseEntity<>(jobService.saveJob(job), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public void deleteSavedJobs(@PathVariable String id)
    {
        Optional<Jobs> job= jobService.findById(id);
         jobService.deleteJobs(id);
    }

    @GetMapping("/{id}")
    public ResposneTemplateVO getUserWithOtherDetails(@PathVariable("id") String id){
        return jobService.getAllDetails(id);
    }

}
