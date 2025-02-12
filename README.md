# Kanban Board App

A Kanban-style task management web application built using **Vite + React** and deployed on **Vercel**.

## Live Demo

[Kanban Board App](https://kanban-board-app-git-main-aoge2716s-projects.vercel.app)

## Features

- Add, edit, and delete tasks
- Sidebar navigation
- Task details page
- Responsive design
- Client-side routing with React Router

## Tech Stack

- **Frontend:** React, Vite, React Router
- **Deployment:** Vercel

## Folder Structure

```
src/
  ├── assets/                # Static assets (JSON)
  ├── component/             # Reusable components
  ├── pages/                 # Page components
  ├── App.jsx                 # Main application component
  ├── main.jsx                # React root file
  ├── index.css               # Global styles
public/
  ├── image/       
             # Image assets
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
   ```

2. **Install dependencies:**

   ```bash
   npm install
   npm install axios
   npm install react-router-dom
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app should now be running at `http://localhost:5173/` (default Vite port).

## Deployment

This app is deployed on **Vercel**. To deploy your own instance:

1. Go to **[Vercel](https://vercel.com/)** and log in.
2. Click **"New Project"** and select your GitHub repository.
3. Configure settings:
   - **Framework:** Select `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/`
4. Click **"Deploy"** and wait for the build to finish.

### **Fix for 404 Issues on Refresh**

Add the following `vercel.json` file to your project root:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This ensures React Router handles routing correctly after deployment.

## Upcoming Features

- Drag & drop task management
- Task categories & filtering
- Dark mode support
- Real-time Updates

## License

This project is licensed under the **MIT License**.

## Contributing

Feel free to submit issues or pull requests to improve this project!

## Contact

For any inquiries, reach out at GitHub: [aoge2716](https://github.com/aoge2716) or [AntoineQuint](https://github.com/AntoineQuint).

