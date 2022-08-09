package com.greencommute.skillsmicroservice;

import com.greencommute.skillsmicroservice.entity.Skill;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = {SkillEntityTests.class})
public class SkillEntityTests {

    private Skill skill = new Skill();
    
    @Test
    void setSkillStateTest() {
        skill.setName("UI Developer");
        Assertions.assertEquals("UI Developer", skill.getName());
    }
}