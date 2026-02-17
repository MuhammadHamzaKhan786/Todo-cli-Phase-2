# TaskFlow - Full-Stack Task Management Application

A modern, full-stack task management web application built with FastAPI, Next.js, and PostgreSQL. TaskFlow allows users to securely manage their tasks with a beautiful, responsive interface.

![TaskFlow](https://img.shields.io/badge/Version-1.0.0-blue) ![Next.js](https://img.shields.io/badge/Next.js-16+-black) ![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green)

## 🚀 Features

### Authentication
- **User Registration** - Create an account with email and password
- **Secure Login** - JWT-based authentication with secure token management
- **Protected Routes** - Dashboard and API endpoints are secured with authentication

### Task Management
- **Create Tasks** - Add new tasks with a simple form
- **Read Tasks** - View all your tasks in an organized dashboard
- **Update Tasks** - Edit task titles and mark tasks as complete
- **Delete Tasks** - Remove tasks you no longer need
- **Complete Tasks** - Mark tasks as done with visual feedback

### User Experience
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern UI** - Clean, intuitive interface built with Tailwind CSS
- **Real-time Feedback** - Loading states and error handling
- **Premium Dashboard** - Enhanced task visualization with statistics

### Security
- **JWT Authentication** - Stateless, secure token-based auth
- **User Isolation** - Each user only sees their own tasks
- **Password Hashing** - Secure password storage with bcrypt
- **API Authorization** - Backend enforces all authorization decisions

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| [FastAPI](https://fastapi.tiangolo.com/) | Modern Python web framework |
| [SQLModel](https://sqlmodel.tiangolo.com/) | SQL database ORM |
| [Neon PostgreSQL](https://neon.tech/) | Serverless PostgreSQL database |
| [JWT](https://pyjwt.readthedocs.io/) | JSON Web Token authentication |
| [Pydantic](https://docs.pydantic.dev/) | Data validation |

### Frontend
| Technology | Purpose |
|------------|---------|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React](https://react.dev/) | User interface library |

## 📁 Project Structure

```
todo-cli/
├── backend/                    # Original FastAPI backend
│   ├── src/
│   │   ├── api/                # API route handlers
│   │   ├── auth/               # Authentication modules
│   │   ├── database/           # Database configuration
│   │   └── models/             # SQLModel database models
│   └── requirements.txt        # Python dependencies
│
├── backend-secure-api/         # Secure API implementation
│   ├── src/
│   │   ├── api/                # API endpoints
│   │   ├── auth/               # JWT & auth handlers
│   │   └── models/             # Data models
│   └── requirements.txt        # Python dependencies
│
├── frontend/                   # Next.js frontend application
│   ├── src/
│   │   ├── app/                # Next.js App Router pages
│   │   │   ├── dashboard/      # Main dashboard
│   │   │   ├── premium-dashboard/  # Premium features
│   │   │   ├── signin/         # Login page
│   │   │   └── signup/         # Registration page
│   │   ├── components/         # React components
│   │   │   └── ui/             # Reusable UI components
│   │   ├── contexts/           # React contexts
│   │   └── lib/                # Utilities & API client
│   └── package.json            # Node.js dependencies
│
├── specs/                      # Project specifications
├── history/                    # Development history
└── README.md                   # This file
```

## 🏁 Getting Started

### Prerequisites

- **Python 3.9+** - For running the FastAPI backend
- **Node.js 18+** - For running the Next.js frontend
- **PostgreSQL** - Database (uses Neon serverless)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Configure environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your database URL and JWT secret
   ```

6. Run the backend server:
   ```bash
   uvicorn src.main:app --reload
   ```

The API will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   # Create .env.local with your API URL
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## � API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and get JWT token |

### Tasks
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Get all tasks for current user |
| POST | `/api/` | Create a new task |
| PUT | `/api/{id}` | Update a task |
| DELETE | `/api/{id}` | Delete a task |
| PATCH | `/api/{id}/complete` | Mark task as complete |

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@host/database
JWT_SECRET=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Developed with ❤️ using FastAPI and Next.js

## 🙏 Acknowledgments

- [FastAPI](https://fastapi.tiangolo.com/) - Amazing Python web framework
- [Next.js](https://nextjs.org/) - Powerful React framework
- [Neon](https://neon.tech/) - Serverless PostgreSQL
- [Tailwind CSS](https://tailwindcss.com/) - Beautiful CSS framework
