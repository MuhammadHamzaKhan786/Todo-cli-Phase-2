from sqlmodel import create_engine
from sqlalchemy.pool import QueuePool
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    # Use a default SQLite URL for development if no DATABASE_URL is provided
    DATABASE_URL = "sqlite:///./test.db"

engine = create_engine(DATABASE_URL, poolclass=QueuePool)