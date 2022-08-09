package com.greencommute.skillsmicroservice.entity;

import javax.persistence.*;
import lombok.*;
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="skills")
public class Skill
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    @Setter(AccessLevel.NONE)
    private int id;
    @Column(name="skill")
    private String name;

}
