package com.greencommute.skillsmicroservice.controller;


import com.greencommute.skillsmicroservice.entity.Skill;
import com.greencommute.skillsmicroservice.service.SkillService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/skills")
@CrossOrigin
@Log4j2
public class SkillController {

    @Autowired
    private SkillService skillService;

    @GetMapping("")
    public ResponseEntity<List<Skill>> getSkills(){
            List<Skill> skill=skillService.findAll();
            return new ResponseEntity<List<Skill>>(skill,HttpStatus.OK);
    }

    @GetMapping(path="/{skillId}")
    public ResponseEntity<Skill> getSkillById(@PathVariable int skillId){
            Skill skill = skillService.findById(skillId);
            return new ResponseEntity<Skill>(skill, HttpStatus.OK);
    }


}
