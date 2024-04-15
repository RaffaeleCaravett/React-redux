package com.example.blogs.auth;


import com.example.blogs.enums.Role;
import com.example.blogs.exceptions.BadRequestException;
import com.example.blogs.payloads.entities.UserRegistrationDTO;
import com.example.blogs.user.User;
import com.example.blogs.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

@Autowired
    AuthService authService;
@Autowired
    UserRepository userRepository;
@Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

@PostMapping("")
public User save(@RequestBody @Validated UserRegistrationDTO userRegistrationDTO, BindingResult validation){
    if(userRepository.findByEmail(userRegistrationDTO.email()).isPresent()){
        throw new BadRequestException("User con email " + userRegistrationDTO.email() + " già presente in db.");
    }

  return authService.save(userRegistrationDTO);

    }


}
