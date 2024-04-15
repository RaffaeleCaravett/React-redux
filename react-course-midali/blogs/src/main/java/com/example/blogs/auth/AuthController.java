package com.example.blogs.auth;


import com.example.blogs.enums.Role;
import com.example.blogs.exceptions.BadRequestException;
import com.example.blogs.payloads.entities.Tokens;
import com.example.blogs.payloads.entities.UserLoginDTO;
import com.example.blogs.payloads.entities.UserRegistrationDTO;
import com.example.blogs.user.User;
import com.example.blogs.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.convert.ReadingConverter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/login")
    public Tokens login(@RequestBody @Validated UserLoginDTO userLoginDTO,BindingResult validation){
    if(userRepository.findByEmail(userLoginDTO.email()).isPresent()){
        User user = userRepository.findByEmail(userLoginDTO.email()).get();

        if(!bCryptPasswordEncoder.matches(userLoginDTO.password(), user.getPassword())){
            throw new BadRequestException("La password non coincide con l'originale.");
        }
        return authService.generateTokens(user);
    }else{
        throw new BadRequestException("Email non presente in db.");
    }
    }



}
