from backend.app import app, db  # Import app and db from your Flask app setup
from backend.models import Service, Project, TeamMember # Import your models

def seed_data():
    with app.app_context(): # Use Flask app context
        # Optional: Clear existing data
        db.session.query(Service).delete()
        db.session.query(Project).delete()
        db.session.query(TeamMember).delete()
        db.session.commit()
        print("Existing data cleared.")

        # Create Services
        services_data = [
            {'name': 'Développement Web Personnalisé', 'description': 'Création de sites web sur mesure, des applications web complexes aux landing pages.'},
            {'name': 'Développement d\'Applications Mobiles', 'description': 'Conception et développement d\'applications natives et hybrides pour iOS et Android.'},
            {'name': 'Design UI/UX et Stratégie Digitale', 'description': 'Interfaces utilisateur intuitives et stratégies digitales pour optimiser l\'engagement.'},
            {'name': 'Solutions Cloud et DevOps', 'description': 'Migration vers le cloud, gestion d\'infrastructure et pratiques DevOps pour l\'efficacité.'}
        ]
        for s_data in services_data:
            service = Service(**s_data)
            db.session.add(service)
        db.session.commit()
        print(f"{len(services_data)} services added.")

        # Create Projects
        projects_data = [
            {
                'title': 'Plateforme E-commerce "IvoireShop"',
                'description': 'Développement d\'une plateforme e-commerce complète pour les artisans locaux d\'Abidjan.',
                'client_name': 'Artisans Unis CI',
                'location': 'Abidjan, Côte d\'Ivoire',
                'image_url': '/images/placeholder_project1.png' # Placeholder
            },
            {
                'title': 'Application Mobile "SantéPlus CI"',
                'description': 'Application mobile pour la prise de rendez-vous médicaux et la consultation à distance.',
                'client_name': 'Ministère de la Santé (Fictif)',
                'location': 'Yamoussoukro, Côte d\'Ivoire',
                'image_url': '/images/placeholder_project2.png' # Placeholder
            },
            {
                'title': 'Site Web Institutionnel - "Investir en CI"',
                'description': 'Refonte du portail web pour la promotion des investissements en Côte d\'Ivoire.',
                'client_name': 'Agence de Promotion des Investissements (Fictif)',
                'location': 'Abidjan, Côte d\'Ivoire',
                'image_url': '/images/placeholder_project3.png' # Placeholder
            }
        ]
        for p_data in projects_data:
            project = Project(**p_data)
            db.session.add(project)
        db.session.commit()
        print(f"{len(projects_data)} projects added.")

        # Create Team Members
        team_members_data = [
            {
                'name': 'Aisha Koné',
                'role': 'Développeuse Full-Stack Senior',
                'bio': 'Passionnée par les technologies web, Aisha a plus de 8 ans d\'expérience dans la création de solutions robustes.',
                'profile_image_url': '/images/placeholder_team1.png' # Placeholder
            },
            {
                'name': 'Yao N\'Goran',
                'role': 'Designer UI/UX Principal',
                'bio': 'Yao transforme des idées complexes en interfaces utilisateur élégantes et fonctionnelles. Expert en design thinking.',
                'profile_image_url': '/images/placeholder_team2.png' # Placeholder
            },
            {
                'name': 'Fatou Diarra',
                'role': 'Chef de Projet Digital',
                'bio': 'Fatou assure la liaison entre les clients et l\'équipe technique, garantissant la livraison des projets dans les temps et budgets.',
                'profile_image_url': '/images/placeholder_team3.png' # Placeholder
            }
        ]
        for tm_data in team_members_data:
            member = TeamMember(**tm_data)
            db.session.add(member)
        db.session.commit()
        print(f"{len(team_members_data)} team members added.")

        print("Database seeded successfully!")

if __name__ == '__main__':
    seed_data()
