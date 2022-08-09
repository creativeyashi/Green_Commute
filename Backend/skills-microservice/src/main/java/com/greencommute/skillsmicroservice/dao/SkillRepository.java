package com.greencommute.skillsmicroservice.dao;

import com.greencommute.skillsmicroservice.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill,Integer> {
}
