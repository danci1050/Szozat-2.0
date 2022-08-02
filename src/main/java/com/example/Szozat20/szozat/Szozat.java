package com.example.Szozat20.szozat;

import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.ArrayList;
import java.util.List;

@Component
@EnableScheduling
public class Szozat {

    private static String WordOfTheDay;

    @Scheduled(cron = "0 0 0 * * *")
    @EventListener(ApplicationReadyEvent.class)
    public int updateWordOfTheDay() throws Exception {
        Path path = Paths.get("src/main/resources/static/wordList.txt");
        List<String> wordList = Files.readAllLines(path);
        int randomIndex = (int) (Math.random() * wordList.size());
        WordOfTheDay = wordList.get(randomIndex);
        //wordList.remove(randomIndex);
        //Files.write(path, wordList);
        System.out.println("Word of the day: " + WordOfTheDay);
        return 0;
    }

    public static String getWordOfTheDay() {
        return WordOfTheDay;
    }

    public static ArrayList<String> wordToList(String word) {
        String[][] multiLettersReplace = {{"ssz", "szsz"}, {"zzs", "zszs"}, {"nny", "nyny"}, {"ggy", "gygy"}, {"lly", "lyly"}, {"tty", "tyty"}, {"ggy", "gygy"}, {"ddz", "dzdz"}, {"ddzs", "dzsdzs"}};
        for (int i = 0; i < multiLettersReplace.length; i++) {
            word = word.replaceAll(multiLettersReplace[i][0], multiLettersReplace[i][1]);
        }
        String[] multiLetters = {"sz", "zs", "ny", "gy", "ly", "ty", "gy", "dz", "dzs"};
        ArrayList<String> wordList = new ArrayList<String>();
        while (word.length() > 0) {
            boolean found = false;
            for (int i = 0; i < multiLetters.length; i++) {
                if (word.startsWith(multiLetters[i])) {
                    wordList.add(multiLetters[i]);
                    word = word.replaceFirst(multiLetters[i], "");
                    found = true;
                }
            }
            if (!found) {
                wordList.add(word.substring(0, 1));
                word = word.replaceFirst(word.substring(0, 1), "");
            }
        }
        return wordList;
    }

}
