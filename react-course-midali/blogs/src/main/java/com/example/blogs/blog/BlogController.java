package com.example.blogs.blog;

import com.example.blogs.payloads.entities.BlogDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    BlogService blogService;

    @PostMapping("")
    @PreAuthorize("hasAuthority('Admin')")
    public Blog save (@RequestBody @Validated BlogDTO blogDTO, BindingResult validation){
        return blogService.save(blogDTO);
    }

    @GetMapping("")
    public Page<Blog> getAll(@RequestParam(defaultValue = "0") int page,@RequestParam(defaultValue = "10") int size,@RequestParam(defaultValue = "id") String orderBy){
        return blogService.findAll(page,size,orderBy);
    }

    @GetMapping("/{id}")
    public Blog getById(@PathVariable long id){
        return blogService.getById(id);
    }

    @GetMapping("/user/{id}")
    public List<Blog> getByUserId(@PathVariable long id){
        return blogService.findByUserId(id);
    }
    @GetMapping("/titolo/{titolo}")
    public List<Blog> getByTitolo(@PathVariable String titolo){
        return blogService.findByTitolo(titolo);
    }
    @PutMapping("/{id}")
    @PreAuthorize("hasAuthority('Admin')")
    public Blog putById(@PathVariable long id, @RequestBody BlogDTO blogDTO){
        return blogService.updateById(id,blogDTO);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAuthority('Admin')")
public boolean deleteById(@PathVariable long id){
        return blogService.deleteById(id);
    }
}
