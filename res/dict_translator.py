#!/bin/env python3

# Capitalizes each word and removes duplicates, adjusts rank accordingly

with open("res/words_en_sort.txt", "w") as out:
    with open("res/words_en.txt", "r") as fd:
        words = {}
        i = 1
        for line in fd.readlines():
            parts = line.split(' ')
            if len(parts) != 3:
                    continue
            if parts[2].upper() not in words:
                    words[parts[2].upper] = True
                    out.write(f"{i} {parts[1]} {parts[2].upper()}")
                    i += 1