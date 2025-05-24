# main.py
from app import app

# This is needed for Google App Engine to find the app instance
# when using gunicorn as the entrypoint.
if __name__ == '__main__':
    # This part is for local development testing if you run `python main.py`
    # It's not strictly necessary for App Engine deployment but good practice.
    app.run(host='127.0.0.1', port=8080, debug=True)
