// frontend/src/api.js

const API_BASE_URL = '/api'; // Handled by Vite proxy in dev, direct in prod

// Generic fetch function
async function fetchAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`API call to ${endpoint} failed with status ${response.status}`);
  }
  return response.json();
}

// Service endpoints
export const getServices = () => fetchAPI('/services');
export const getServiceById = (id) => fetchAPI(`/services/${id}`);

// Project endpoints
export const getProjects = () => fetchAPI('/projects');
export const getProjectById = (id) => fetchAPI(`/projects/${id}`);

// Team Member endpoints
export const getTeamMembers = () => fetchAPI('/team');
export const getTeamMemberById = (id) => fetchAPI(`/team/${id}`);
