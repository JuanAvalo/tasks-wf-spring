package com.avalo.tasks.controller;

import com.avalo.tasks.model.Folder;
import com.avalo.tasks.model.Task;
import com.avalo.tasks.model.dtos.TaskDTO;
import com.avalo.tasks.repositories.FoldersRepository;
import com.avalo.tasks.repositories.TasksRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins =  "http://localhost:3000" )

@RestController
@RequestMapping("users/{userId}/folders/{folderId}/tasks")
public class TaskController {

    @Autowired
    private TasksRepository tasksRepository;

    @Autowired
    private FoldersRepository foldersRepository;

    @PostMapping("create")
    public void create(@PathVariable Integer folderId, @RequestBody TaskDTO taskDTO) {
        Folder folder = foldersRepository.findOneById(folderId);
        Task task = new Task();
        task.setDescription(taskDTO.getDescription());
        task.setState(false);
        folder.addTask(task);

        foldersRepository.save(folder);
    }

    @PutMapping("{taskId}/edit")
    public void editDescription(@PathVariable(value="taskId") Integer taskId, @RequestBody TaskDTO taskDTO) {
            Task task = tasksRepository.findOneById(taskId);
            task.setDescription(taskDTO.getDescription());

            tasksRepository.save(task);
        }

    @PutMapping("{taskId}/state")
    public void editState(@PathVariable(value="folderId") Integer folderId,
        @PathVariable(value="taskId") Integer taskId, @RequestBody TaskDTO taskDTO) {
            Task task = tasksRepository.findOneById(taskId);
            task.setState(taskDTO.isState());

            tasksRepository.save(task);
            }

    @DeleteMapping("{taskId}/delete")
    public void delete(@PathVariable(value="taskId") Integer taskId){
        tasksRepository.deleteById(taskId);
    }
}