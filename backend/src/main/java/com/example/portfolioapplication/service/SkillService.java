package com.example.portfolioapplication.service;

import com.example.portfolioapplication.model.*;
import com.example.portfolioapplication.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SkillService {

    @Autowired
    private SkillRepository skillRepository;

    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    public Skill addSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    public void deleteSkill(Long id) {
        skillRepository.deleteById(id);
    }

    public Skill updateSkill(Long id, Skill updatedSkill) {
        return skillRepository.findById(id).map(skill -> {
            skill.setName(updatedSkill.getName());
            return skillRepository.save(skill);
        }).orElse(null);
    }
}
