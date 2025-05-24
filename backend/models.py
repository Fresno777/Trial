from .app import db # Or from backend.app import db if running scripts from outside backend dir

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f'<Service {self.name}>'

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(150), nullable=False)
    description = db.Column(db.Text, nullable=False)
    client_name = db.Column(db.String(100), nullable=True)
    location = db.Column(db.String(100), nullable=True) # E.g., "Abidjan, Côte d'Ivoire"
    image_url = db.Column(db.String(255), nullable=True) # Placeholder for image path/URL

    def __repr__(self):
        return f'<Project {self.title}>'

class TeamMember(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    role = db.Column(db.String(100), nullable=False) # E.g., "Lead Developer", "UI/UX Designer"
    bio = db.Column(db.Text, nullable=True)
    profile_image_url = db.Column(db.String(255), nullable=True) # Placeholder

    def __repr__(self):
        return f'<TeamMember {self.name}>'
