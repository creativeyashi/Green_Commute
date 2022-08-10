package com.greencommute.jobmicroservice.repository;

import com.greencommute.jobmicroservice.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Jobs, Integer> {
    List<Jobs> findBySavedTrue();
}
