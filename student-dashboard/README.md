# Student Dashboard

A comprehensive student management dashboard built with Node.js, Express, MongoDB, and EJS. Features authentication, CRUD operations, search functionality, and beautiful responsive UI. Demonstrates CI/CD with Kubernetes using Jenkins.

## Features

### Core Functionality
- 🔐 User Authentication (Register/Login/Logout)
- 👥 Student Management (Add/Edit/Delete/View)
- 🔍 Advanced Search (by name or subject)
- 📊 Dashboard Statistics (Total students, A grades, subjects count)
- 📱 Responsive Design with Bootstrap 5
- 🎨 Modern UI with Font Awesome icons and custom CSS

### Technical Features
- MongoDB integration for data persistence
- Session-based authentication with Passport.js
- Flash messages for user feedback
- RESTful API design
- Docker containerization
- Kubernetes deployment ready
- CI/CD with Jenkins

## Prerequisites

- Node.js 18+
- MongoDB (local or cloud)
- Docker & Docker Compose
- Kubernetes cluster (Minikube for local dev)
- Jenkins for CI/CD

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd student-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   - Local: Install MongoDB and start service
   - Docker: `docker run -d -p 27017:27017 --name mongodb mongo:latest`

4. **Environment Configuration**
   - Update MongoDB connection string in `app.js` if needed
   - Default: `mongodb://localhost:27017/student-dashboard`

5. **Run the application**
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

6. **Access the application**
   - Open http://localhost:3000
   - Register a new account or use existing credentials

## Docker Setup

### Build and Run Locally
```bash
# Build image
docker build -t student-dashboard .

# Run container
docker run -p 3000:3000 student-dashboard
```

### Docker Compose (with MongoDB)
```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongodb
    environment:
      - MONGO_URI=mongodb://mongodb:27017/student-dashboard
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
```

## Kubernetes Deployment

### Prerequisites
- Kubernetes cluster (Minikube, GKE, EKS, etc.)
- kubectl configured

### Deploy to K8s
```bash
# Apply deployment
kubectl apply -f deployment.yaml

# Check status
kubectl get pods
kubectl get services

# Get service URL
minikube service student-dashboard-service --url
```

### Update Docker Image
Replace `your-dockerhub-username` in `deployment.yaml` with your actual Docker Hub username.

## CI/CD with Jenkins

### Jenkins Setup
1. Install Jenkins with required plugins:
   - Docker Pipeline
   - Kubernetes CLI
   - Git

2. Configure credentials:
   - Docker Hub credentials (username/password)
   - Kubernetes config (if not using service account)

3. Create Jenkins pipeline job with the provided `Jenkinsfile`

### Pipeline Stages
1. **Checkout**: Pull latest code
2. **Build**: Create Docker image (dev → test tag, main → latest)
3. **Push**: Upload to Docker Hub
4. **Deploy**: Apply K8s manifests and update image

### Branch Strategy
- `dev` branch: Deploys to test environment (image tag: `test`)
- `main` branch: Deploys to production (image tag: `latest`)

### Jenkins Configuration Steps
1. Install Jenkins and required plugins
2. Set up Docker Hub credentials in Jenkins
3. Configure Kubernetes access (copy kubeconfig or use service account)
4. Create pipeline job pointing to repository
5. Push to `dev` or `main` to trigger deployment

## API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/` | Dashboard with student list | Yes |
| GET | `/login` | Login page | No |
| POST | `/login` | Process login | No |
| GET | `/register` | Registration page | No |
| POST | `/register` | Process registration | No |
| GET | `/logout` | Logout | Yes |
| GET | `/add` | Add student form | Yes |
| POST | `/add` | Create student | Yes |
| GET | `/edit/:id` | Edit student form | Yes |
| PUT | `/edit/:id` | Update student | Yes |
| DELETE | `/delete/:id` | Delete student | Yes |
| GET | `/search` | Search students | Yes |

## Project Structure

```
student-dashboard/
├── app.js                 # Main application file
├── package.json           # Dependencies and scripts
├── Dockerfile             # Docker configuration
├── Jenkinsfile            # CI/CD pipeline
├── deployment.yaml        # Kubernetes manifests
├── README.md              # This file
├── views/                 # EJS templates
│   ├── index.ejs         # Dashboard
│   ├── login.ejs         # Login page
│   ├── register.ejs      # Registration
│   ├── add.ejs           # Add student
│   ├── edit.ejs          # Edit student
│   └── search.ejs        # Search results
└── public/               # Static assets
    └── styles.css        # Custom styles
```

## Security Features

- Password hashing with bcrypt
- Session-based authentication
- Input validation and sanitization
- CSRF protection (method-override)
- Secure headers (via Express)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
