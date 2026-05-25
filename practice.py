print("Hello World")
name = "Gouranshi"
print("My name is", name)
age = 20
marks = 85.5
is_student = True
print(age)
print( marks)
print(is_student)

#For loop
for i in range(1, 6):
    print("Number:", i)

#While loop
num = 1
while num <= 5:
    print("Count:", num)
    num += 1

#Function
def greet(name):
    print("Hello,", name)
def add(a, b):
    return a + b
greet("Gouranshi")
result = add(10, 20)
print("Sum:", result)

#ClassandObject
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        print("My name is", self.name, "and I am", self.age, "years old")

s1 = Student("Gouranshi", 20)
s1.introduce()

#ErrorHandling
try:
    num = int(input("Enter a number: "))
    print("You entered:", num)
except ValueError:
    print("That's not a number!")