square_sum= lambda numbers: sum([x*x for x in numbers])

filter_list = lambda l: [x for x in l if type(x) != type(" ")]

dont_give_me_five = lambda start,end:sum(str(5) not in str(i) for i in range(start, end+1))

get_count = lambda sentence:  len([x for x in sentence if x in 'aeoiu'])