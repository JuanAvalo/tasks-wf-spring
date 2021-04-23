package com.avalo.tasks.repositories;

import com.avalo.tasks.model.Task;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TasksRepository extends CrudRepository<Task, Integer>{
    public Task findOneById(Integer id);
    public void deleteById(Integer id);
}