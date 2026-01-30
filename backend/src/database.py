from sqlalchemy import create_engine
from sqlmodel import SQLModel
from sqlalchemy.pool import QueuePool
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    # Use a default SQLite URL for development if no DATABASE_URL is provided
    DATABASE_URL = "sqlite:///./test.db"

# Create engine with proper SSL settings for PostgreSQL if needed
connect_args = {}
if DATABASE_URL.startswith("sqlite"):
    connect_args["check_same_thread"] = False

engine = create_engine(DATABASE_URL, poolclass=QueuePool, connect_args=connect_args)