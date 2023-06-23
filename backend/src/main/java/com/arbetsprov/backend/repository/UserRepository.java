package com.arbetsprov.backend.repository;

import com.arbetsprov.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
