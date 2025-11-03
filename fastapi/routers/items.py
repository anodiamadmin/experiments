# routers/items.py
from fastapi import APIRouter, Depends, HTTPException, Header
from auth.jwt_handler import verify_token

router = APIRouter(prefix="/items", tags=["Items"])

@router.get("/")
def get_items(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing token")

    token = authorization.split(" ")[1]
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    return {"items": ["book", "pen", "laptop"], "user": payload["sub"]}
