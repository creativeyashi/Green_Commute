package com.greencommute.jobmicroservice.repository;

import com.greencommute.jobmicroservice.entity.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JobRepository extends JpaRepository<Jobs, String> {
    List<Jobs> findBySavedTrue();

    Optional<Jobs> findById(String valueOf);
}
