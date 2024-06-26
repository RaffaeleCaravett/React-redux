package com.example.blogs.blog;

import com.example.blogs.enums.Categoria;
import com.example.blogs.exceptions.BadRequestException;
import com.example.blogs.payloads.entities.BlogDTO;
import com.example.blogs.user.UserService;
import jakarta.transaction.Transactional;
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

@Transactional
public Blog save(BlogDTO blogDTO){

    if(!blogRepository.findByTitoloContaining(blogDTO.titolo()).isEmpty()){
        List<Blog> blogs = this.findByTitolo(blogDTO.titolo());
        for(Blog b : blogs){
            if(b.getTitolo().equals(blogDTO.titolo())){
                throw new BadRequestException("Titolo già presente in database");
            }
        }
    }

    Blog blog = new Blog();

    blog.setAutore(blogDTO.autore());
    blog.setCategoria(Categoria.valueOf(blogDTO.categoria()));
    blog.setTesto(blogDTO.testo());
    blog.setTitolo(blogDTO.titolo());
    blog.setTempoLettura(blogDTO.tempoLettura());
    blog.setUser(userService.getById(blogDTO.user_id()));

    return blogRepository.save(blog);

}
@Transactional
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
@Transactional
public Page<Blog> findAll(int page, int size, String orderBy){
    Pageable pageable = PageRequest.of(page,size, Sort.by(orderBy));
    return blogRepository.findAll(pageable);
}
@Transactional
public List<Blog> findByUserId(long id){
    return blogRepository.findByUser_Id(id);
}
@Transactional
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

public boolean deleteAllByUserId(long id){
    try {
        blogRepository.deleteAllByUser_Id(id);
        return true;
    }
    catch (Exception e){
        return false;
    }
}
    @Transactional
public List<Blog> findByTitolo(String titolo){
    return this.blogRepository.findByTitoloContaining(titolo);
}
}
