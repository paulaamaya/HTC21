from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

## helpers

def valid_login(username, password):
  return False

def log_the_user_in(username):
  # server the page for the logged in user
  return render_template('template.html')

## end helpers

@app.route('/')
def index():
    return 'home page goes here!'

@app.route('/hello')
def hello():
    return 'Hello, World'

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if not 'username' in request.form or not 'password' in request.form:
          error = 'No username/password provided'
        elif valid_login(request.form['username'], request.form['password']):
            # handle the page in this method
            return log_the_user_in(request.form['username'])
        else:
            error = 'Invalid username/password'
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    return render_template('template.html', error=error)

@app.route('/signup', methods=['POST'])
def signup():
    # do some signup stuff
    return 'signup' # serve the next page
    