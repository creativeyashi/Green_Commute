package com.greencommute.skillsmicroservice;

import com.greencommute.skillsmicroservice.controller.SkillController;
import com.greencommute.skillsmicroservice.entity.Skill;
import com.greencommute.skillsmicroservice.service.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(classes = {SkillsControllerTests.class})
public class SkillsControllerTests {

    @Mock
    SkillServiceImpl skillService;

    @InjectMocks
    SkillController controller;

    List<Skill> skill;
    Skill mySkill;

    @Test
    public void test_allSkills(){

        List<Skill> skill = new ArrayList<Skill>();
        skill.add(new Skill(1,"Application Developer"));
        skill.add(new Skill(2,"UI?UX Designer"));

        when(skillService.findAll()).thenReturn(skill);
        ResponseEntity<List<Skill>>  res = controller.getSkills();
        try {
            assertEquals(HttpStatus.FOUND, res.getStatusCode());
            assertEquals(2, res.getBody().size());
        }
        catch (Exception e){
            assertEquals(HttpStatus.NOT_FOUND,res.getStatusCode());
        }
    }

    @Test
    public void test_getSkillsById(){
       mySkill = new Skill(1,"Application Developer");
       int skillId=1;

        when(skillService.findById(skillId)).thenReturn(mySkill);
        ResponseEntity<Skill> res = controller.getSkillById(skillId);
        try {
            assertEquals(HttpStatus.FOUND, res.getStatusCode());
            assertEquals(skillId, res.getBody().getId());
        }
        catch (Exception e){
            assertEquals(HttpStatus.NOT_FOUND, res.getStatusCode());
        }
    }
}