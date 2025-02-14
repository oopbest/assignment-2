# User Data Transformation Project

This project fetches user data from the [DummyJSON](https://dummyjson.com/users) API, transforms it to group users by department, and serves the transformed data via an HTTP endpoint. The transformation includes additional fields like male/female count, age range, hair color summary, and address details (full name and zipcode).

---

## Technologies Used

- **Language**: TypeScript
- **HTTP** Framework: Express.js
- **HTTP Client**: Axios
- **Package Manager** : npm

## Features

- Fetches user data from the DummyJSON API.
- Groups users by department.
- Provides additional fields for each department:
- Male and female counts.
- Age range.
- Hair color summary.
- Address details (full name and zipcode).
- Serves the transformed data via an HTTP endpoint.

## Setup and Installation

1. **Clone the Repository**

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install Dependencies**

```
npm install
```

3. **Build the Project**

```
npx tsc
```

4. **Run the Server**

```
node dist/index.js
```

5. **Access the API**

```
http://localhost:3000/users-by-department
```

---

## Project Structure

```
project/
├── src/
│   ├── index.ts               # Entry point for the Express.js server
│   ├── utils/
│   │   └── transformData.ts   # Logic for transforming user data
│   ├── types.ts               # TypeScript type definitions
├── dist/                      # Compiled JavaScript files (generated after build)
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
```

## API Endpoint

**GET** `/users-by-department`

- **Description**: Returns user data grouped by department with additional fields.
- **Response**:

```json
{
  "Engineering": {
    "male": 1,
    "female": 1,
    "ageRange": "28-30",
    "hair": {
      "Black": 1,
      "Blonde": 1
    },
    "addressUser": {
      "John Doe": "10001",
      "Jane Smith": "90001"
    }
  }
}
```
