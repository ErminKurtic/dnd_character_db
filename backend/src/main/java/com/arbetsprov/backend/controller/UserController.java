package com.arbetsprov.backend.controller;

import com.arbetsprov.backend.exception.UserNotFoundException;
import com.arbetsprov.backend.model.User;
import com.arbetsprov.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/character")
    User newChar(@RequestBody User newChar){
        return userRepository.save(newChar);
    }

    @GetMapping("/characters")
    List<User> getAllCharacters(){
        return userRepository.findAll();
    }

    @GetMapping("/character/{id}")
    User getCharacterByID(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/character/{id}")
    User updateCharacter(@RequestBody User newCharacter, @PathVariable Long id){
        return userRepository.findById(id)
                .map(user -> {
                    user.setCharName(newCharacter.getCharName());
                    user.setCharClass(newCharacter.getCharClass());
                    user.setCharDescription(newCharacter.getCharDescription());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/character/{id}")
    String deleteCharacter(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "Character with id " +id+ " has been deleted!";
    }
}
