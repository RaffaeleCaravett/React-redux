package com.example.blogs.user;

import com.example.blogs.enums.Role;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
@Enumerated(EnumType.STRING)
private Role role;
}
