Grades={'O':range(90,101),'A':range(50,90)}

def get_grade(avgmarks,Grades):
    for Grade in Grades.keys():
        
        for value in Grades[Grade]:
            if avgmarks == value :
                print(Grade)

get_grade(90,Grades)
