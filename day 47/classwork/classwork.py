vaporcode = lambda s: s.upper().split(" ")

find_it = lambda seq : sum(set([i for i in seq if seq.count(i) % 2 == 1]))