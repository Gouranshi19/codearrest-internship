tasks = []

def add_task(task):
    tasks.append({"task": task, "done": False})
    print("Task added:", task)

def show_tasks():
    if len(tasks) == 0:
        print("No tasks!")
        return

    for i, t in enumerate(tasks):
        status = "Done" if t["done"] else "Not Done"
        print(f"{i+1}. {t['task']} - {status}")

def complete_task(num):
    if 1 <= num <= len(tasks):
        tasks[num-1]["done"] = True
        print("Task completed!")
    else:
        print("Invalid task number!")

def delete_task(num):
    if 1 <= num <= len(tasks):
        removed = tasks.pop(num-1)
        print("Deleted:", removed["task"])
    else:
        print("Invalid task number!")

while True:
    print("\n1. Add Task")
    print("2. Show Tasks")
    print("3. Complete Task")
    print("4. Delete Task")
    print("5. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        task = input("Enter task: ")
        add_task(task)

    elif choice == "2":
        show_tasks()

    elif choice == "3":
        try:
            num = int(input("Enter task number: "))
            complete_task(num)
        except ValueError:
            print("Please enter a valid number!")

    elif choice == "4":
        try:
            num = int(input("Enter task number: "))
            delete_task(num)
        except ValueError:
            print("Please enter a valid number!")

    elif choice == "5":
        print("Exiting program...")
        break

    else:
        print("Invalid choice!")