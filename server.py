from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__)

## helpers



## end helpers

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'post':
      return True
    
    return render_template('signup.html')
    