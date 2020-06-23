import mock from "@/fake-db/mock.js"

// Contact
let data = {
  tasks: [
    {
      "id": 6445,
      "title": "WHOLE DAY TOUR AT TAMAN BOTANI NEGARA SHAH ALAM",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": true,
      "tags": ["doc", "Family with Children"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 11,
      "title": "WHOLE DAY TOUR AT TAMAN BOTANI NEGARA SHAH ALAM",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": false,
      "isStarred": true,
      "tags": ["frontend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 15,
      "title": "WHOLE DAY TOUR AT TAMAN BOTANI NEGARA SHAH ALAM",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": true,
      "tags": ["backend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 18,
      "title": "WHOLE DAY TOUR AT TAMAN BOTANI NEGARA SHAH ALAM",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": false,
      "isStarred": false,
      "tags": ["bug"],
      "isCompleted": true,
      "isTrashed": false
    },
    {
      "id": 340,
      "title": "UNDERWATER WORLD LANGKAWI",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": true,
      "tags": [],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 23,
      "title": "UNDERWATER WORLD LANGKAWI",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": true,
      "tags": ["frontend", "backend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 25,
      "title": "UNDERWATER WORLD LANGKAWI",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": false,
      "tags": [],
      "isCompleted": false,
      "isTrashed": true
    },
    {
      "id": 28,
      "title": "UNDERWATER WORLD LANGKAWI",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": false,
      "isStarred": false,
      "tags": ["backend"],
      "isCompleted": false,
      "isTrashed": true
    },
    {
      "id": 29,
      "title": "UNDERWATER WORLD LANGKAWI",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": false,
      "isStarred": false,
      "tags": [],
      "isCompleted": true,
      "isTrashed": true
    },
    {
      "id": 340,
      "title": "WHOLE DAY TOUR AT TAMAN BOTANI NEGARA SHAH ALAM",
      "desc": "Very clean, well maintained park, kids love it.",
      "isImportant": true,
      "isStarred": false,
      "tags": ["frontending"],
      "isCompleted": false,
      "isTrashed": false
    },
  ],
  taskTags: [
    { id: 11,text: 'Spent less than 1 hour', value: 'bug', color: 'danger' },
    { id: 5,text: 'Spent 1 hour' ,value : 'frontending', color: 'primary' },
    { id: 7,text: 'Spent 2 hours', value: 'backend', color: 'warning'},
    { id: 8,text: 'Spent 3 hours', value: 'doc', color: 'success'},
    { id: 8,text: 'Spent 4 hours', value: 'doc', color: 'success'},
    { id: 11,text: 'Spent more than 4 hours', value: 'bug', color: 'danger' },
    { id: 11,text: 'Solo Traveler', value: 'bug', color: 'danger' },
    { id: 5,text: 'Couple' ,value : 'frontending', color: 'primary' },
    { id: 7,text: 'Family with Children', value: 'backend', color: 'warning'},
    { id: 8,text: 'Group of Friends', value: 'doc', color: 'success'},
    { id: 11,text: 'Company / Corporate', value: 'bug', color: 'danger' },
  ]
}

// POST : Add new Tasks
mock.onPost("/api/apps/todo/tasks/").reply((request) => {

  // Get task from post data
  let task = JSON.parse(request.data).task

  const length = data.tasks.length
  let lastIndex = 0
  if(length){
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, {id: task.id}]
})

// GET: Fetch Todos
mock.onGet("api/apps/todo/tasks").reply((request) => {

  const filter = request.params.filter

  const filteredTasks = data.tasks.filter((task)=> {

    // If filter == all
    if(filter === "all") return !task.isTrashed

      // If filter == starred
    if(filter === "starred") return !task.isTrashed && task.isStarred

    // If filter == important
    if(filter === "important") return !task.isTrashed && task.isImportant

    // If filter == completed
    if(filter === "completed") return !task.isTrashed && task.isCompleted

    // If filter == trashed
    if(filter === "trashed") return task.isTrashed

    else return task.tags.includes(filter)

  })


  return [200, JSON.parse(JSON.stringify(filteredTasks)).reverse()]
})

// GET: Fetch tags
mock.onGet("api/apps/todo/tags").reply(() => {
  return [200, JSON.parse(JSON.stringify(data.taskTags))]
})

// POST: Update Task
mock.onPost(/\/api\/apps\/todo\/task\/\d+/).reply((request) => {

  const taskId = request.url.substring(request.url.lastIndexOf("/")+1)

  let task = data.tasks.find((task) => task.id == taskId)
  // task.title = JSON.parse(request.data).task.title
  Object.assign(task, JSON.parse(request.data).task)

  return [200, task]
})
