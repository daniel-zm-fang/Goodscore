import os
from cs50 import SQL
from flask_session import Session
from flask_sqlalchemy import SQLAlchemy
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename

IMAGE_UPLOADS = '/home/Erick3/mysite/static/uploads/images'
MUSIC_UPLOADS = '/home/Erick3/mysite/static/uploads/music'
ALLOWED_EXTENSIONS = {'mp3', 'png', 'jpg', 'jpeg'}
