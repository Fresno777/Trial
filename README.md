# Trial

## Deployment to Google App Engine

This application is configured for deployment to Google App Engine (Standard Environment).

**Prerequisites:**
- Google Cloud SDK (`gcloud`) installed and authenticated.
- A Google Cloud Project with billing enabled and the App Engine Admin API enabled.

**Key Configuration Files:**
- `requirements.txt`: Specifies Python package dependencies (e.g., Flask).
- `main.py`: Entry point for Gunicorn, imports the Flask `app` object from the `app` package.
- `app.yaml`: Configuration file for App Engine, defines runtime, entrypoint, and handlers.

**Deployment Steps (from your local machine, in the project root):**
1.  Set your project: `gcloud config set project YOUR_PROJECT_ID`
2.  Deploy: `gcloud app deploy`

After deployment, you can access your app at `https://YOUR_PROJECT_ID.appspot.com`.