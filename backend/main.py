import os
from utils import read_json_file
from settings import PAGE_CONFIG_FOLDER
from models.user_details import UserDetails
from services.user_service import user_service

from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/api/v1/page_config/{page}", status_code=200)
async def get_page_config(page):
    print("hello")
    if page not in os.listdir(PAGE_CONFIG_FOLDER):
        raise HTTPException(status_code=404, detail="Page not found!")
    return read_json_file(os.path.join(PAGE_CONFIG_FOLDER, page))


@app.post("/api/v1/user_details", status_code=200)
async def update_user_details(user_details: UserDetails):
    user_id = user_service.save_user_details(user_details)
    return {'link': '/api/v1/user_details/{}'.format(user_id)}

@app.get("/api/v1/user_details/{user_id}")
async def get_user_details(user_id):
    user_details = user_service.get_user_details(user_id)
    if not user_details:
        raise HTTPException(status_code=404, detail="user_id {} not found!".format(user_id))
    return user_details

@app.get("/health", status_code=200)
async def health():
    return {"status_message": "ok"}