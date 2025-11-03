# schemas/user.py
from pydantic import BaseModel

class User(BaseModel):
    username: str
    email: str
    full_name: str | None = None
    age: int | None = None

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class UserPublic(BaseModel):
    username: str
    email: str
