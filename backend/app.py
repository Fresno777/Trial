from flask import Flask, jsonify, send_from_directory
import os

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask API"})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Check if the path is an API route or other backend route
        # For this example, any path not matching /api/data or static files
        # will serve index.html for client-side routing.
        if path.startswith('api/'): # Do not serve index.html for API routes
            return jsonify({"error": "API route not found"}), 404
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000) # Specify a port, e.g., 5000
