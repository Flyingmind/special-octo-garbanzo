# config.py

import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'mysql+pymysql://bastian:bastian@localhost/todo_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
