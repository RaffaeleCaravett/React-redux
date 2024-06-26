package com.example.blogs.user;

import com.example.blogs.blog.BlogService;
import com.example.blogs.exceptions.NotFoundException;
import com.example.blogs.payloads.entities.UserRegistrationDTO;
import org.springframework.beans.factory.annotation.Autowired;
 import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    BlogService blogService;

    public boolean deleteById(long id){
        if(userRepository.findById(id).isPresent()){

            blogService.deleteAllByUserId(id);

userRepository.deleteById(id);
return true;
        }else{
            return false;
        }
    }
    public User updateById (long id, UserRegistrationDTO userRegistrationDTO){
            User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User with id " + id + " not found."));

            user.setEmail(userRegistrationDTO.email());
user.setNome(userRegistrationDTO.nome());
user.setCognome(userRegistrationDTO.cognome());

return user;
    }


    public List<User> findByEmailContaining (String email){
        return userRepository.findByEmailContaining(email);
    }

    public User getById(long id){
        return userRepository.findById(id).orElseThrow(()->new NotFoundException("User with id " + id + "not found"));
    }
}
