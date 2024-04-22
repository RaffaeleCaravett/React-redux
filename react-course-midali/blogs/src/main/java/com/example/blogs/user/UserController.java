package com.example.blogs.user;

import com.example.blogs.payloads.entities.UserRegistrationDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public User putById(@PathVariable long id, @RequestBody UserRegistrationDTO userRegistrationDTO){
        return userService.updateById(id,userRegistrationDTO);
    }
    @PutMapping("/me")
    @PreAuthorize("hasAuthority('User')")
    public User putById(@AuthenticationPrincipal User currentUser, @RequestBody UserRegistrationDTO userRegistrationDTO){
        return userService.updateById(currentUser.getId(),userRegistrationDTO);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public Boolean deleteById(@PathVariable long id){
        return userService.deleteById(id);
    }
    @DeleteMapping("/me")
    @PreAuthorize("hasAuthority('User')")
    public Boolean deleteById(@AuthenticationPrincipal User currentUser, @RequestBody UserRegistrationDTO userRegistrationDTO){
        return userService.deleteById(currentUser.getId());
    }

    @GetMapping("/{id}")
    public User getById(long id){
        return userService.getById(id);
    }
    @GetMapping("/{email}")
    public List<User> findByEmailContaining(@PathVariable String email){
        return userService.findByEmailContaining(email);
    }
}
