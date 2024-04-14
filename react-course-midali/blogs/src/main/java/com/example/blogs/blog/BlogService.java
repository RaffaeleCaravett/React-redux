package com.example.blogs.blog;

import com.example.blogs.enums.Categoria;
import com.example.blogs.exceptions.BadRequestException;
import com.example.blogs.payloads.entities.BlogDTO;
import com.example.blogs.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
@Autowired
    BlogRepository blogRepository;
@Autowired
    UserService userService;

public Blog save(BlogDTO blogDTO){
    Blog blog = new Blog();

    blog.setAutore(blogDTO.autore());
    blog.setCategoria(Categoria.valueOf(blogDTO.categoria()));
    blog.setTesto(blogDTO.testo());
    blog.setTitolo(blogDTO.titolo());
    blog.setTempoLettura(blogDTO.tempoLettura());
    blog.setUser(userService.getById(blogDTO.user_id()));

    return blogRepository.save(blog);

}

public Blog getById(long id){
    return blogRepository.findById(id).orElseThrow(()->new BadRequestException("User con id " + id + " non trovato."));
}

public boolean deleteById(long id){
    try {
        blogRepository.deleteById(id);
        return true;
    }catch (Exception e){
        return false;
    }
}

public Page<Blog> findAll(int page, int size, String orderBy){
    Pageable pageable = PageRequest.of(page,size, Sort.by(orderBy));
    return blogRepository.findAll(pageable);
}

public List<Blog> findByUserId(long id){
    return blogRepository.findByUser_Id(id);
}

public Blog updateById(long id,BlogDTO blogDTO){

    Blog blog = this.getById(id);

    blog.setAutore(blogDTO.autore());
    blog.setCategoria(Categoria.valueOf(blogDTO.categoria()));
    blog.setTesto(blogDTO.testo());
    blog.setTitolo(blogDTO.titolo());
    blog.setTempoLettura(blogDTO.tempoLettura());
    blog.setUser(userService.getById(blogDTO.user_id()));

    return blogRepository.save(blog);

}
}
