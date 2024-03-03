from db.STORE import STORE
from utils import generate_id
from models.user_details import UserDetails

class UserService:
    def __init__(self):
        pass

    def save_user_details(self, user_details: UserDetails):
        user_id = generate_id(6)
        STORE['user_details'][user_id] = user_details
        return user_id
    
    def get_user_details(self, user_id):
        if user_id not in STORE['user_details']:
            return None
        return STORE['user_details'][user_id]

user_service = UserService()