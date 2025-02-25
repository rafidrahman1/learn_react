import env from '../config/env.config';

class FacebookService {
  static getApiUrl(endpoint) {
    return `${env.facebook.apiBaseUrl}/${env.facebook.apiVersion}${endpoint}`;
  }

  static async makeApiCall(endpoint, params = {}) {
    const url = this.getApiUrl(endpoint);
    try {
      const response = await fetch(url, {
        ...params,
        headers: {
          ...params.headers,
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      if (env.debug) {
        console.error('API call failed:', error);
      }
      throw error;
    }
  }
}

export default FacebookService;