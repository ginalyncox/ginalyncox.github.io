from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, World!'

@app.route('/submit_contact', methods=['POST'])
def submit_contact():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']

    # Here you can handle the form submission. For example, you can store it in a database or send an email.
    print(f"Received message from {name}, email: {email}, message: {message}")

    return 'Form submitted'

if __name__ == '__main__':
    app.run(debug=True)
