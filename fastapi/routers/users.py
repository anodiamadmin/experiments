# routers/users.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import models
from database.db_setup import get_db, engine
from schemas.user import UserCreate, UserPublic
from auth.hashing import hash_password

models.Base.metadata.create_all(bind=engine)  # ensures table exists

router = APIRouter(prefix="/users", tags=["Users"])


@router.post("/", response_model=UserPublic)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = (
        db.query(models.User)
        .filter((models.User.username == user.username) | (models.User.email == user.email))
        .first()
    )
    if existing_user:
        raise HTTPException(status_code=400, detail="Username or email already registered")

    db_user = models.User(
        username=user.username,
        email=user.email,
        password=hash_password(user.password),
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.get("/{user_id}", response_model=UserPublic)
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
