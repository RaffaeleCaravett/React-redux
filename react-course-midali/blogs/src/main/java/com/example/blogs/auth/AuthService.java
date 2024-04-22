package com.example.blogs.auth;

import com.example.blogs.enums.Role;
import com.example.blogs.payloads.entities.Tokens;
import com.example.blogs.payloads.entities.UserRegistrationDTO;
import com.example.blogs.security.JWTTools;
import com.example.blogs.user.User;
import com.example.blogs.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

@Autowired
    UserRepository userRepository;
    @Autowired
    private PasswordEncoder bcrypt;

    @Autowired
    private JWTTools jwtTools;

    public User save(UserRegistrationDTO userRegistrationDTO){
        User user = new User();
        user.setCognome(userRegistrationDTO.cognome());
        user.setNome(userRegistrationDTO.nome());
        user.setEmail(userRegistrationDTO.email());
        if(userRegistrationDTO.email().equals("raffaelecaravetta13@gmail.com")) {
            user.setRole(Role.Admin);
        }else {
            user.setRole(Role.User);
        }
        user.setPassword(bcrypt.encode(userRegistrationDTO.password()));
        return userRepository.save(user);
    }

    public Tokens generateTokens(User user){
return jwtTools.createToken(user);
    }

    public User verifyAccessToken(String accessToken){
        return jwtTools.verifyAccessToken(accessToken);
    }
    public Tokens verifyRefreshToken(String refreshToken){
        return jwtTools.verifyRefreshToken(refreshToken);
    }
}
