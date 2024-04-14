package com.example.blogs.blog;

import com.example.blogs.enums.Categoria;
import com.example.blogs.user.User;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "blogs")
@Data
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String titolo;
    private String autore;
    private int tempoLettura;
    @Lob
    private String testo;
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
