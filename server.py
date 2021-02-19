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

def sign_up_user(form_data):
  l = ['first-name', 'last-name', 'email', 'age']
  for label in l:
      if not form_data[label]:
          return label + 'field was left empty'
  # put everything in a database
  # something with cookies?
  return False

## end helpers

@app.route('/')
def index():
    return render_template('index.html')

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
    error = None
    l = ['first-name', 'last-name', 'email', 'age']
    for label in l:
      if not label in request.form:
        error = 'Missing data'
        return render_template('index.html', error=error)
    error = sign_up_user(request.form)
    if not error:
        # handle the page in this method
        return log_the_user_in(request.form['email'])
    return render_template('index.html', error=error)
    