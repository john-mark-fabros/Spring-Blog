package com.example.Blog.controller;

import com.example.Blog.domain.Post;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/posts")
public class PostController {

    @GetMapping
    public String postPage(Model model) {
        Post post = new Post();
        post.setTitle("First Blog Post");
        post.setDescription("Simple Spring boot Post");
        post.setBody("Spring boot is awesome");
        model.addAttribute("post", post);
        return "post";
    }
}
