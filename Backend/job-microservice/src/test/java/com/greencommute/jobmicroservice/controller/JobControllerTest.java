 package com.greencommute.jobmicroservice.controller;

import com.greencommute.jobmicroservice.converter.JobsConverter;
import com.greencommute.jobmicroservice.dto.JobsDTO;
import com.greencommute.jobmicroservice.entity.Jobs;
import com.greencommute.jobmicroservice.service.JobService;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


import org.mockito.InjectMocks;
import org.mockito.Mock;




@SpringBootTest
public class JobControllerTest {
    @InjectMocks
    private  JobController jobController;

    @Mock
    private JobsConverter jobsConverter;

    @Mock
    private ModelMapper modelMapper;

    @Mock
    private JobService jobService;

    @Test
    void listJobs(){
        Jobs job = new Jobs("1", "1", "Myntra", "https://s3-alpha-sig.figma.com/img/d654/94fc/7f4c9a0f51caaf2851135dc8bdc34945?Expires=1659916800&Signature=IXhZuZppysjcd7XwdmLeTDr2LZ3gsp3XYrxbu1rtZM41eWZ3p0nm8~52Gp5S2pRZKFiX7jrkeF6289rqqhnLYcbq9AOvEW3NchzwBOb0VQkgTRksEZxeMbKNxdRQPMJUAvcCO5K9jFLY0iIj1qCzqUtNtMblkUgHFZElND~kVtThFGbTiDBe9Zcfd~htnx1f4974EdgTVmsH~OuvvSdh6jEVGdCZe4Name8NLGB~82KI3qVhZehGNdm7QuQS1TCxtwqBeSC3jg0p2QlmeSQVuXMvX5qHDZZoG9KQlJPsImCtpdIg~1XwCUFUODyNmj5cm0pX6HAvGbqLdM3goVEg5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", "1", "36 min ago", "10 - 20 Kms", "Full time", "UI/UX Designer", false, "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company\'s collective product suites worldwide.", "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills.");
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);
        List<JobsDTO> jobsDTOList = jobs.stream().map(job1 -> modelMapper.map(job1, JobsDTO.class)).collect(Collectors.toList());

        when(jobService.findAll()).thenReturn(jobsDTOList);
        assertEquals(jobsDTOList, jobController.listJobs());
    }

    @Test
    void listSavedJobs(){
        Jobs job = new Jobs("1", "1", "Myntra", "https://s3-alpha-sig.figma.com/img/d654/94fc/7f4c9a0f51caaf2851135dc8bdc34945?Expires=1659916800&Signature=IXhZuZppysjcd7XwdmLeTDr2LZ3gsp3XYrxbu1rtZM41eWZ3p0nm8~52Gp5S2pRZKFiX7jrkeF6289rqqhnLYcbq9AOvEW3NchzwBOb0VQkgTRksEZxeMbKNxdRQPMJUAvcCO5K9jFLY0iIj1qCzqUtNtMblkUgHFZElND~kVtThFGbTiDBe9Zcfd~htnx1f4974EdgTVmsH~OuvvSdh6jEVGdCZe4Name8NLGB~82KI3qVhZehGNdm7QuQS1TCxtwqBeSC3jg0p2QlmeSQVuXMvX5qHDZZoG9KQlJPsImCtpdIg~1XwCUFUODyNmj5cm0pX6HAvGbqLdM3goVEg5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", "1", "36 min ago", "10 - 20 Kms", "Full time", "UI/UX Designer", true, "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company\'s collective product suites worldwide.", "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills.");
        List<Jobs> jobs = new ArrayList<>();
        jobs.add(job);

        List<JobsDTO> jobsDTOList = jobs.stream().map(job1 -> modelMapper.map(job1, JobsDTO.class)).collect(Collectors.toList());

        when(jobService.findBySavedTrue()).thenReturn(jobsDTOList);
        assertEquals(jobsDTOList, jobController.getSavedJob());
    }

   @Test
    void saveJob(){
        Jobs job = new Jobs("100", "1", "Myntra", "https://s3-alpha-sig.figma.com/img/d654/94fc/7f4c9a0f51caaf2851135dc8bdc34945?Expires=1659916800&Signature=IXhZuZppysjcd7XwdmLeTDr2LZ3gsp3XYrxbu1rtZM41eWZ3p0nm8~52Gp5S2pRZKFiX7jrkeF6289rqqhnLYcbq9AOvEW3NchzwBOb0VQkgTRksEZxeMbKNxdRQPMJUAvcCO5K9jFLY0iIj1qCzqUtNtMblkUgHFZElND~kVtThFGbTiDBe9Zcfd~htnx1f4974EdgTVmsH~OuvvSdh6jEVGdCZe4Name8NLGB~82KI3qVhZehGNdm7QuQS1TCxtwqBeSC3jg0p2QlmeSQVuXMvX5qHDZZoG9KQlJPsImCtpdIg~1XwCUFUODyNmj5cm0pX6HAvGbqLdM3goVEg5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", "1", "36 min ago", "10 - 20 Kms", "Full time", "UI/UX Designer", true, "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company\'s collective product suites worldwide.", "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills.");
        JobsDTO jobsDTO = jobsConverter.jobsEntityTodto(job);
        when(jobService.saveJob(job)).thenReturn(job);
        ResponseEntity<Jobs> responseEntity = jobController.saveJob(job);
        assertThat(responseEntity.getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    void deleteSavedJob(){
        Jobs job = new Jobs("100", "1", "Myntra", "https://s3-alpha-sig.figma.com/img/d654/94fc/7f4c9a0f51caaf2851135dc8bdc34945?Expires=1659916800&Signature=IXhZuZppysjcd7XwdmLeTDr2LZ3gsp3XYrxbu1rtZM41eWZ3p0nm8~52Gp5S2pRZKFiX7jrkeF6289rqqhnLYcbq9AOvEW3NchzwBOb0VQkgTRksEZxeMbKNxdRQPMJUAvcCO5K9jFLY0iIj1qCzqUtNtMblkUgHFZElND~kVtThFGbTiDBe9Zcfd~htnx1f4974EdgTVmsH~OuvvSdh6jEVGdCZe4Name8NLGB~82KI3qVhZehGNdm7QuQS1TCxtwqBeSC3jg0p2QlmeSQVuXMvX5qHDZZoG9KQlJPsImCtpdIg~1XwCUFUODyNmj5cm0pX6HAvGbqLdM3goVEg5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA", "1", "36 min ago", "10 - 20 Kms", "Full time", "UI/UX Designer", true, "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company\'s collective product suites worldwide.", "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.Excellent written and oral communication and presentation skills.");
        JobsDTO jobsDTO = jobsConverter.jobsEntityTodto(job);
        when(jobService.saveJob(job)).thenReturn(job);
        jobController.deleteSavedJobs(100);
    }
}



