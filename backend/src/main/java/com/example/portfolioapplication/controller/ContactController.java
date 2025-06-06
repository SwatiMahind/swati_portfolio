package com.example.portfolioapplication.controller;

import com.example.portfolioapplication.model.Contact;
import com.example.portfolioapplication.service.ContactService;
import com.example.portfolioapplication.repository.ContactRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

    private final ContactRepository repo;

    public ContactController(ContactRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Contact> getAllContacts() {
        return repo.findAll();
    }

    @PostMapping
    public Contact saveContact(@RequestBody Contact contact) {
        return repo.save(contact);
    }
}