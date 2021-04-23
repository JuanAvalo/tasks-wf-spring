package com.avalo.tasks.controller;

import com.avalo.tasks.model.User;
import com.avalo.tasks.model.dtos.UserDTO;
import com.avalo.tasks.repositories.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000" })

@RestController
@RequestMapping("users")
public class UsersController {

    @Autowired
    private UsersRepository usersRepository;
    
    @GetMapping("{userId}")
    public User get(@PathVariable Integer userId) {
        return usersRepository.findOneById(userId);
    }

    @PostMapping("create")
    public void create(@RequestBody UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        usersRepository.save(user);
    }
}