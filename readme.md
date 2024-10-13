# Keycloak Sample Project

## 1. Keycloak Setup

### Prerequisites
- Install Docker and Docker Compose.

### Steps to Start Keycloak
1. Run Keycloak in Docker using the provided Docker Compose file:
   ```bash
   docker-compose up
   ```

2. Once the Keycloak server is running, log in to the Keycloak Admin Console:
   - URL: `http://localhost:8080`
   - Username: `admin`
   - Password: `admin`

3. Inside the Keycloak Admin Console:
- **Realm**: Create a new realm called `my-website`.
- **Roles**: Add two roles:
  - `viewer`
  - `editor`
- **Users**: Create users and assign them roles:
  - `test_viewer` (role: `viewer`)
  - `test_editor` (role: `editor`)
- **Credentials**: Assign a password to each of the users.
- **Client**: Create a client configuration for the React frontend:
  - **Client ID**: `my-website-frontend`
  - **Root URL** and **Web Origins**: `http://localhost:3000`
  - **Valid Redirect URLs**: `http://localhost:3000/*`

5. **Add users**:
   - Under "Users," create users and assign them the appropriate roles (`editor` and `viewer`).

Once Keycloak is set up, it will be ready for integration with the frontend.

## 2. Frontend Setup (keycloak-react)

The frontend is a React.js application with the following layers:

- **Components**: Reusable UI elements and building blocks.
- **Contexts**: Global state management using React context.
- **Hooks**: Custom logic to reuse functionality across components.
- **Pages**: Views for different routes in the application.
- **Routes**: Define the client-side routing of the application.
- **Services**: Handle API calls and communication with the backend.
- **Utils**: Helper functions and utilities used throughout the app.

### Environment Variables
The frontend relies on Keycloak for authentication. Make sure to create a `.env` file in the `keycloak-react` folder with the following content:

```bash
REACT_APP_KEYCLOAK_URL=http://localhost:8080
REACT_APP_KEYCLOAK_REALM=fmy-website
REACT_APP_KEYCLOAK_CLIENT_ID=my-website-frontend
```

These values should match the Keycloak configuration you set up earlier.

### Running the Frontend
1. Navigate to the `keycloak-react` folder:
   ```bash
   cd keycloak-react
   ```
2. Install dependencies and start the frontend:
   ```bash
   npm install
   npm start
   ```