package com.bl.addressbook.Addressbook.controler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepo userRepo;
    @PostMapping("/save")
    public ResponseEntity<?> save(@RequestBody User user){


       if(userRepo.findByUserName(user.getUserName()).isPresent())throw new RuntimeException("user All readyExist");

        userRepo.save(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String userName,@RequestParam String password){

        Optional<User> user = userRepo.findByUserName(userName);

        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseOject("200","Ok"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ResponseOject("404","NotOk"));
        }


    }
    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){

        List<User> user = userRepo.findAll();
        if (user.size() >= 0) {
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NotOK");
        }



    }
}
