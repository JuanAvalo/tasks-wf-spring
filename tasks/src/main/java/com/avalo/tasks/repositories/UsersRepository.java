package com.avalo.tasks.repositories;

import com.avalo.tasks.model.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends CrudRepository<User, Integer> {
    
    public User findOneById(Integer id);
}
