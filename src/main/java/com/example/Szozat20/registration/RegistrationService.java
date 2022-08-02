package com.example.Szozat20.registration;

import com.example.Szozat20.user.AppUserRole;
import com.example.Szozat20.user.AppUser;
import com.example.Szozat20.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {
    private final UserService userService;

    public int register(RegistrationRequest request) {
        return userService.signUpUser(new AppUser(request.getUsername(), request.getName(), request.getPassword(), AppUserRole.USER));
    }
}
