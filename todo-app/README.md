# TodoList App

A simple TodoList application built with React.js that allows users to add, remove, and mark tasks as complete. The app is integrated with the JSONPlaceholder REST API for data storage and retrieval.

## Table of Contents

- [API Integration](#API Integration)
- [Features](#features)
- [Usage](#usage)
- [Styling](#styling)
- [Local Storage](#local-storage)

API Integration
The app uses the JSONPlaceholder API as a data source. The following API endpoints are utilized:

Fetch Tasks:
Tasks are fetched from https://jsonplaceholder.typicode.com/todos?userId=1.

Add Task:
New tasks are added using a local update, as JSONPlaceholder does not support adding tasks.


Update Task:
Task completion status is updated using a local update, as JSONPlaceholder does not support updating tasks.

Delete Task:
Tasks are deleted using a local update, as JSONPlaceholder does not support deleting tasks.

Features
View a list of tasks.
Mark tasks as complete by checking the checkbox.
Add new tasks through the UI.
Update task completion status.
Delete tasks.
Edit tasks.


Usage


View Tasks:
Open the app to view the existing tasks fetched from the JSONPlaceholder API.

Add a New Task:
Enter a task in the input field and click the "Add Task" button.


Mark Task as Complete:
Check the checkbox next to a task to mark it as complete.


Edit a Task:
Click the "Edit" button to edit the text of a task.

Delete a Task:
Click the "Delete" button to remove a task.

Styling
The app is styled for a clean and user-friendly interface. Completed tasks have a red border and a light red background for easy identification.

Local Storage
The app uses local storage to persist the TodoList even after the page is refreshed. Tasks are saved to local storage whenever there is a change in the TodoList.