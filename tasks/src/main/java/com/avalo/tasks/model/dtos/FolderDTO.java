package com.avalo.tasks.model.dtos;

import java.util.ArrayList;
import java.util.List;

import com.avalo.tasks.model.Task;

public class FolderDTO {
    private String name;

    private List<Task> tasks = new ArrayList<Task>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }
}
