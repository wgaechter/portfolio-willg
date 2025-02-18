---
title: Test 2
---

# My Portfolio

Welcome to my programming portfolio. Here, you will find various projects and code samples that showcase my skills and experience.

## Projects

### Project 1: Personal Website

I built a personal website using HTML, CSS, and JavaScript. The website includes a blog, a portfolio section, and a contact form.

#### Code Sample

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Personal Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Website</h1>
    </header>
    <nav>
        <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    <main>
        <section id="blog">
            <h2>Blog</h2>
            <p>Here are my latest blog posts.</p>
        </section>
        <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Check out my projects.</p>
        </section>
        <section id="contact">
            <h2>Contact</h2>
            <p>Get in touch with me.</p>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 My Personal Website</p>
    </footer>
</body>
</html>
```

### Project 2: To-Do List App

I developed a to-do list application using React. The app allows users to add, edit, and delete tasks.

#### Code Sample

```javascript
import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, newTask]);
        setNewTask('');
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
```

## Contact

Feel free to reach out to me via [email](mailto:example@example.com) or connect with me on [LinkedIn](https://www.linkedin.com).

Thank you for visiting my portfolio!