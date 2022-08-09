package com.greencommute.skillsmicroservice;

import com.greencommute.skillsmicroservice.dao.SkillRepository;
import com.greencommute.skillsmicroservice.entity.Skill;
import com.greencommute.skillsmicroservice.service.SkillServiceImpl;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@SpringBootTest(classes = {SkillsMicroserviceApplicationTests.class})
class SkillsMicroserviceApplicationTests {
    @Mock
    SkillRepository skillRepository;
    @InjectMocks
    SkillServiceImpl skillService;

    @Test
    void getAllSkillsTest(){

        List<Skill> skill=new ArrayList<Skill>();
        skill.add(new Skill(1,"Application Developer"));
        skill.add(new Skill(2,"UI designer"));

        when(skillRepository.findAll()).thenReturn(skill);
        assertEquals(2,skillService.findAll().size());
    }
    @Test
    public void test_findById(){

        int skillID=1;
        Skill skill1=new Skill(1,"Application Developer");
        Skill skill2=new Skill(1,"UI/UX Developer");
        when(skillRepository.findById(skillID)).thenReturn(Optional.of(skill1));
        assertEquals(1,skillService.findById(skillID).getId());

    }

}