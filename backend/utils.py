import json
import string
import random

def read_json_file(filepath):
    with open(filepath, 'r') as file:
        data = json.load(file)
    return data

def generate_id(size=6, chars=string.ascii_letters + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))