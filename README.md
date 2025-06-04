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

### Automated Deployment with Cloud Build

You can automate deployments from a Git repository (like GitHub) using Google Cloud Build.

1.  **Connect Repository:** Connect your GitHub repository to your Google Cloud project via the Cloud Build section in the GCP Console.
2.  **Create a Trigger:**
    *   Set up a trigger that watches a specific branch (e.g., `main` or `master`).
    *   Configure the trigger to use the `cloudbuild.yaml` file from your repository for the build configuration.
3.  **`cloudbuild.yaml`:**
    *   The `cloudbuild.yaml` file in this repository is configured to use the Google Cloud SDK to deploy the application to App Engine via the `gcloud app deploy app.yaml --quiet` command.
    *   Ensure the Cloud Build service account has permissions to deploy to App Engine (this is often configured by default or prompted during trigger setup).

Once set up, pushes to the designated branch in your GitHub repository will automatically trigger a deployment to App Engine.