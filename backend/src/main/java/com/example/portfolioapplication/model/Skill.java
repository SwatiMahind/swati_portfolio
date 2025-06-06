package com.example.portfolioapplication.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    // Getters and Setters
}
