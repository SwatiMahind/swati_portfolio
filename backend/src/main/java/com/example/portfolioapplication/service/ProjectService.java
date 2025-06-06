package com.example.portfolioapplication.service;

import com.example.portfolioapplication.model.*;
import com.example.portfolioapplication.repository.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository repo;

    public List<Project> getAll() { return repo.findAll(); }
    public Project save(Project p) { return repo.save(p); }
    public void delete(Long id) { repo.deleteById(id); }
}
