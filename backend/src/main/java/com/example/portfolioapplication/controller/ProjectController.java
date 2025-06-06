package com.example.portfolioapplication.controller;

import com.example.portfolioapplication.model.Project;
import com.example.portfolioapplication.service.ProjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    private ProjectService service;

    @GetMapping
    public List<Project> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Project add(@RequestBody Project project) {
        return service.save(project);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
