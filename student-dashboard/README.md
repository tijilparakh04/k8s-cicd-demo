# Student Dashboard

A simple student dashboard application built with Node.js, Express, and EJS. This application demonstrates CI/CD with Kubernetes using Jenkins.

## Features

- View list of students with their grades and subjects
- Add new students to the dashboard
- Responsive UI using Bootstrap

## Prerequisites

- Node.js (v14 or higher)
- Docker
- Kubernetes cluster
- Jenkins with Docker and kubectl configured

## Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start` or `npm run dev` for development with nodemon
4. Open http://localhost:3000 in your browser

## CI/CD Setup

### Jenkins Pipeline

The Jenkinsfile defines a pipeline that:
- Builds a Docker image
- Pushes to Docker Hub
- Deploys to Kubernetes

Branches:
- `dev` branch: Deploys to test environment (tag: `test`)
- `main` branch: Deploys to production (tag: `latest`)

### Configuration Steps

1. **Set up Jenkins:**
   - Install Jenkins on your server
   - Install required plugins: Docker Pipeline, Kubernetes CLI
   - Configure Docker Hub credentials in Jenkins (credential ID: `dockerhub-credentials`)

2. **Configure Kubernetes Access:**
   - Ensure kubectl is configured in Jenkins to access your K8s cluster
   - Update `deployment.yaml` with your Docker Hub username

3. **Update Placeholders:**
   - Replace `your-dockerhub-username` in `Dockerfile` and `deployment.yaml` with your actual Docker Hub username

4. **Create Jenkins Job:**
   - Create a new Pipeline job in Jenkins
   - Point to your repository
   - The Jenkinsfile will handle the rest

5. **Branching Strategy:**
   - Push to `dev` branch to deploy to test
   - Merge to `main` branch to deploy to production

## Deployment

The application will be deployed to Kubernetes with a LoadBalancer service. Access the application via the external IP provided by your K8s cluster.
