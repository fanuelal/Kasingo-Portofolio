import random
import csv

randomlist = []
cardNUmbers = 4
generated = 0
path = '../boards/generated.csv';
fw = open(path, 'w')
writer = csv.writer(fw)
while(generated <= cardNUmbers ):
    for i in range(5):
        tempList = []
        for j in range(5):
            n = random.randint(1,75)
            tempList.append(n)
        writer.writerow(tempList)
        print(tempList)
        randomlist.append(tempList)
    print('='*30)
    generated += 1

fw.close()


