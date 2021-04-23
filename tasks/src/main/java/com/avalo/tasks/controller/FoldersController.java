package com.avalo.tasks.controller;

import com.avalo.tasks.model.Folder;
import com.avalo.tasks.model.User;
import com.avalo.tasks.model.dtos.FolderDTO;
import com.avalo.tasks.repositories.FoldersRepository;
import com.avalo.tasks.repositories.UsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000" })

@RestController
@RequestMapping("users/{userId}/folders")
public class FoldersController {

    @Autowired
    private FoldersRepository foldersRepository;

    @Autowired
    private UsersRepository usersRepository;

    @PostMapping("create")
    public void create(@PathVariable Integer userId, @RequestBody FolderDTO folderDTO) {
        User user = usersRepository.findOneById(userId);
        Folder folder = new Folder();
        folder.setName(folderDTO.getName());
        user.addFolder(folder);

        usersRepository.save(user);
    }

    @GetMapping("{folderId}")
    public Folder get(@PathVariable(value="folderId") Integer folderId) {
        return foldersRepository.findOneById(folderId);
    }

    @PutMapping("{folderId}/edit")
    public void edit(@RequestBody FolderDTO folderDTO,
        @PathVariable(value="folderId") Integer folderId) {

        Folder folder = foldersRepository.findOneById(folderId);
        folder.setName(folderDTO.getName());

        foldersRepository.save(folder);

    }

    @DeleteMapping("{folderId}/delete")
    public void delete(@PathVariable(value="folderId") Integer folderId) {
        foldersRepository.deleteById(folderId);
    }
}