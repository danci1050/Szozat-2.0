package com.example.Szozat20.szozat;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api/v1/szozat")
public class SzozatController {



    @PostMapping
    public ResponseEntity<String[]> matchLetters(@RequestBody String guess) {
        System.out.println(guess);
        ArrayList<String> wordOfTheDay = Szozat.wordToList(Szozat.getWordOfTheDay());
        ArrayList<String> guessedLetters = Szozat.wordToList(guess);
        String[] result = new String[5];

        for (int i = 0; i < 5; i++) {
            if (wordOfTheDay.get(i).equals(guessedLetters.get(i))) {
                result[i] = "correct";
                wordOfTheDay.set(i, " ");
            } else if (wordOfTheDay.contains(guessedLetters.get(i))) {
                result[i] = "close";
                wordOfTheDay.set(wordOfTheDay.indexOf(guessedLetters.get(i)), " ");
            } else {
                result[i] = "wrong";
            }
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
