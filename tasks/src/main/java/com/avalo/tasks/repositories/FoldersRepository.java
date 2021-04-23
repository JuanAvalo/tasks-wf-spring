package com.avalo.tasks.repositories;

import com.avalo.tasks.model.Folder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoldersRepository extends CrudRepository<Folder, Integer>{
    public Folder findOneById(Integer id);
    public void deleteById(Integer id);
}