# Welcome to the Climapulse Front-end Developer Test!

## Repository Setup

### Create Your Own Repository

After receiving the `front-end-test.zip` file, create a new GitHub repository (private or public) and push the provided setup files to your main branch without modifications.

### Submitting Your Solution

Once your solution is complete, share the link to your repository (and provide access if necessary). Please include instructions in the `README.md` on how to run the application.

## API Setup

A mock API is provided using the [json-server](https://github.com/typicode/json-server/tree/v0) package, located in the `/api` folder. To start the API, run:

```bash
npm install
npm run dev
```

Once running, you can fetch user data with:

```bash
curl http://localhost:3000/users
```

## Designs and Wireframes

**The provided designs are guidelines** and should be treated as wireframes. Pixel-perfect implementation is not required. You can find design images in the `/designs` folder, and a Figma file is available for import into your own Figma account (free accounts are supported).

## The Assignment

Your task is to build a web application with the pages described below, as if it were intended for production deployment.
Each page includes optional bonus features you may choose to implement. For these, refer to the [json-server documentation](https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#routes) for available REST API options.

You are free to use any tech stack you prefer. We recommend choosing one you are most comfortable with.

### List Users Page

Create a page that displays all users by fetching data from the API. When a user is clicked, navigate to their detail page (see below).

**API endpoint to fetch users:**
`GET http://localhost:3000/users`

#### Bonus Features

- Filter the list of users
- Add a new user
- Implement pagination

### User Detail Page

Create a page that shows all details for a specific user, with an option to delete the user via a button.

- **API endpoint to fetch user by ID:** `GET http://localhost:3000/users/:id`
- **API endpoint to delete user by ID:** `DELETE http://localhost:3000/users/:id`

#### Bonus Features

- Edit user details
