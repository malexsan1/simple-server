## A simple server used for a TodoApp assignment.

## Instalation
`npm install`
or
`yarn install`

## Running the server
`npm run start`
or
`yarn start`

## Authentication

### **POST @ /api/login** -> token: string

```js
body { 
  email: String
  password String
}
```
---

## Todo CRUD

### **GET @ /api/todos** -> list of todos
```js
response: [
  {
    id: String
    description: String
    done: Boolean
  }
]
```

### **POST @ /api/todos** -> creates a new todo
```js
body: {
  id: String
  description: String
  done: Boolean
}

// the newly added todo
response: {
  id: String
  description: String
  done: Boolean
}
```

### **PATCH @ /api/todos/:todoId** -> updates a todo
```js
body: {
  description: String
  done: Boolean
}

// the updated todo
response: {
  id: String
  description: String
  done: Boolean
}
```

### **DELETE @ /api/todos/:todoId** -> deletes the specified todo item
```js
response: {
  todoId: String
}
```
