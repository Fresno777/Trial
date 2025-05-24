from flask import Flask, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy # Added import
import os

app = Flask(__name__, static_folder='../frontend/dist', static_url_path='')

# SQLAlchemy Configuration
# TODO: Use environment variables for sensitive data like database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://youruser:yourpassword@localhost/company_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False # Suppress warning

db = SQLAlchemy(app) # Initialize SQLAlchemy

# Import models (ensure this is after db is defined)
# This makes models known to SQLAlchemy instance for create_all
from .models import Service, Project, TeamMember

# Helper function to convert Service model to dictionary
def service_to_dict(service):
    return {
        'id': service.id,
        'name': service.name,
        'description': service.description
    }

@app.route('/api/data') # Existing route, to be kept for now
def get_data():
    return jsonify({"message": "Hello from Flask API"})

# API endpoint to get all services
@app.route('/api/services', methods=['GET'])
def get_services():
    services = Service.query.all()
    return jsonify([service_to_dict(s) for s in services])

# API endpoint to get a single service by ID
@app.route('/api/services/<int:id>', methods=['GET'])
def get_service(id):
    service = Service.query.get_or_404(id)
    return jsonify(service_to_dict(service))

# Helper function to convert Project model to dictionary
def project_to_dict(project):
    return {
        'id': project.id,
        'title': project.title,
        'description': project.description,
        'client_name': project.client_name,
        'location': project.location,
        'image_url': project.image_url
    }

# API endpoint to get all projects
@app.route('/api/projects', methods=['GET'])
def get_projects():
    projects = Project.query.all()
    return jsonify([project_to_dict(p) for p in projects])

# API endpoint to get a single project by ID
@app.route('/api/projects/<int:id>', methods=['GET'])
def get_project(id):
    project = Project.query.get_or_404(id)
    return jsonify(project_to_dict(project))

# Helper function to convert TeamMember model to dictionary
def team_member_to_dict(member):
    return {
        'id': member.id,
        'name': member.name,
        'role': member.role,
        'bio': member.bio,
        'profile_image_url': member.profile_image_url
    }

# API endpoint to get all team members
@app.route('/api/team', methods=['GET'])
def get_team_members():
    members = TeamMember.query.all()
    return jsonify([team_member_to_dict(m) for m in members])

# API endpoint to get a single team member by ID
@app.route('/api/team/<int:id>', methods=['GET'])
def get_team_member(id):
    member = TeamMember.query.get_or_404(id)
    return jsonify(team_member_to_dict(member))

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

# Example of where db might be used later for creating tables (if not using Flask-Migrate)
# with app.app_context():
#     db.create_all() # This line would typically be run once or via a migration tool

# Create database tables if they don't exist
# This is suitable for development and initial setup.
# For production, consider using Flask-Migrate.
with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=5000) # Specify a port, e.g., 5000
