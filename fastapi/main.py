# main.py
from fastapi import FastAPI
from routers import users, items, auth

app = FastAPI(title="VoiceClone Learning API")

# Routers
app.include_router(users.router)
app.include_router(items.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "Record your voice!"}
