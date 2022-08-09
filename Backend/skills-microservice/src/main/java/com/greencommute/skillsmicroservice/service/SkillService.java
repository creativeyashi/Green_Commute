package com.greencommute.skillsmicroservice.service;

import com.greencommute.skillsmicroservice.entity.Skill;

import java.util.List;

public interface SkillService {
    public List<Skill> findAll();

    public Skill findById(int id);
}
