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

## Watches

### **GET @ /api/watches** -> list of watches

```js
response: [
  {
    id: "52b149bc-b6f9-5eba-a34b-6c17be4167e2",
    price: "$5681.30",
    description:
      "Gezasi vitopu siknamus giosme zolitvif mur ric dowep iv of wus envuvwo wimrovfog sihimimom je olzozo mijjelve. Kaf wo sandiure hufupisuh posuge ikvuvu bel basok jilboate fulwok vi zoripun licfotkal relcosof tuod lukisefuv vaomi ipe. Fezub jezbat raefoem ib wa haldobaj fobilgam ivonibig wus fugurem asmijra dukreta basvev.",
    info: {
      listingNumber: "6f08c2e8",
      referenceNumber: "db0b8d72",
      model: "Imetoka",
      brand: "Hublot",
      year: "2096",
      gender: "Female"
    },
    calibre: {
      powerReserve: 19,
      movement: "Manual",
      movementPerCalibre: 1622
    },
    case: {
      material: "steel",
      diameter: 39,
      glass: "salmon"
    },
    strap: {
      material: "leather",
      braceletColor: "black"
    }
  },
  ...otherWatches
]
```

### **GET @ /api/watches/:watchId** -> details of a single watch

```js
response: {
    id: "52b149bc-b6f9-5eba-a34b-6c17be4167e2",
    price: "$5681.30",
    description:
      "Gezasi vitopu siknamus giosme zolitvif mur ric dowep iv of wus envuvwo wimrovfog sihimimom je olzozo mijjelve. Kaf wo sandiure hufupisuh posuge ikvuvu bel basok jilboate fulwok vi zoripun licfotkal relcosof tuod lukisefuv vaomi ipe. Fezub jezbat raefoem ib wa haldobaj fobilgam ivonibig wus fugurem asmijra dukreta basvev.",
    info: {
      listingNumber: "6f08c2e8",
      referenceNumber: "db0b8d72",
      model: "Imetoka",
      brand: "Hublot",
      year: "2096",
      gender: "Female"
    },
    calibre: {
      powerReserve: 19,
      movement: "Manual",
      movementPerCalibre: 1622
    },
    case: {
      material: "steel",
      diameter: 39,
      glass: "salmon"
    },
    strap: {
      material: "leather",
      braceletColor: "black"
    }
  }
```
