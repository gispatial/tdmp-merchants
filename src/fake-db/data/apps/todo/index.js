import mock from "@/fake-db/mock.js"

// Contact
let data = {
  tasks: [
    {
      "id": 10,
      "title": "Nur Faten Munirah bt Mahfudz",
      "desc": "It was quite an awesome experience. My family and I got a chance to interact with many different animals in this park. Worth a try once in a lifetime.",
      "isImportant": true,
      "isStarred": true,
      "tags": ["doc", "spent 2 hours"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 11,
      "title": "demi nur syafiqah binti kamalaffandi",
      "desc": "worth every penny!!",
      "isImportant": false,
      "isStarred": true,
      "tags": ["frontend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 15,
      "title": "RIZAL BIN HUSIN 🎁",
      "desc": "The children love it…especially the Skyrex, Skydome and 3D Museum…during peak seasons, a very long waiting time to take the skycab…",
      "isImportant": true,
      "isStarred": true,
      "tags": ["backend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 18,
      "title": "Salina Binti Shafie",
      "desc": "Funtastic experience",
      "isImportant": false,
      "isStarred": false,
      "tags": ["bug"],
      "isCompleted": true,
      "isTrashed": false
    },
    {
      "id": 20,
      "title": "Hew Boon Chung 😁",
      "desc": "Sky cab. About 2hours",
      "isImportant": true,
      "isStarred": true,
      "tags": [],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 23,
      "title": "Shaizatul Shafie ❤️",
      "desc": "It fun and great trip",
      "isImportant": true,
      "isStarred": true,
      "tags": ["frontend", "backend", "doc"],
      "isCompleted": false,
      "isTrashed": false
    },
    {
      "id": 25,
      "title": "Nor sarina",
      "desc": "Im soo soo happy with this experience",
      "isImportant": true,
      "isStarred": false,
      "tags": [],
      "isCompleted": false,
      "isTrashed": true
    },
    {
      "id": 28,
      "title": "INTAN NORAHKEMA BT MUSTAPA",
      "desc": "best pakej yg diberikan dgn harga yg mampu beli",
      "isImportant": false,
      "isStarred": false,
      "tags": ["backend"],
      "isCompleted": false,
      "isTrashed": true
    },
    {
      "id": 29,
      "title": "AKM SHARIFUL ISLAM MAMUN",
      "desc": "Kids spent a good time.",
      "isImportant": false,
      "isStarred": false,
      "tags": [],
      "isCompleted": true,
      "isTrashed": true
    },
    {
      "id": 33,
      "title": "Nor Atiqah binti Samsudin 💻",
      "desc": "Harga berpatutan.. Service yang bagus.. Sangat puas hatiii.. Next time mai lagi nak booking yang sama jugak hehehe",
      "isImportant": true,
      "isStarred": false,
      "tags": ["frontend"],
      "isCompleted": false,
      "isTrashed": false
    },
  ],
  taskTags: [
    { id: 5,text: 'Frontend' ,value : 'frontend', color: 'primary' },
    { id: 7,text: 'Backend', value: 'backend', color: 'warning'},
    { id: 8,text: 'Doc', value: 'doc', color: 'success'},
    { id: 11,text: 'Bug', value: 'bug', color: 'danger' },
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
