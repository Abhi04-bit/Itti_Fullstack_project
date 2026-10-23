/**
 * Client-side API Service for The Itti Foundation
 * Connects frontend pages directly to /api/v1 endpoints with standard error handling
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  details?: any;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

const API_BASE = '/api/v1';

async function fetchJson<T>(url: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });
    return await res.json();
  } catch (err: any) {
    return {
      success: false,
      error: err.message || 'Network request failed',
    };
  }
}

export const ApiService = {
  // Public Content Fetchers
  async getCommitments() {
    return fetchJson(`${API_BASE}/commitments`);
  },

  async getProjects(category?: string, query?: string) {
    const params = new URLSearchParams();
    if (category && category !== 'ALL') params.set('category', category);
    if (query) params.set('q', query);
    return fetchJson(`${API_BASE}/projects?${params.toString()}`);
  },

  async getEvents() {
    return fetchJson(`${API_BASE}/events`);
  },

  async getProducts(category?: string) {
    const params = new URLSearchParams();
    if (category && category !== 'ALL') params.set('category', category);
    return fetchJson(`${API_BASE}/marketplace?${params.toString()}`);
  },

  async getHealth() {
    return fetchJson(`${API_BASE}/health`);
  },

  // Public Form Submissions
  async submitContact(data: { name: string; email: string; message: string; honeypot?: string }) {
    return fetchJson(`${API_BASE}/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async submitVolunteer(data: {
    name: string;
    email: string;
    phone?: string;
    pillar: string;
    availability: string;
    skills: string;
  }) {
    return fetchJson(`${API_BASE}/volunteers`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async submitMembership(data: {
    name: string;
    email: string;
    phone?: string;
    dob: string;
    isUnder18: boolean;
    guardianName?: string;
    guardianContact?: string;
    consentEmail: boolean;
    consentWhatsapp: boolean;
    consentSms: boolean;
  }) {
    return fetchJson(`${API_BASE}/memberships`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async submitNewsletter(email: string) {
    return fetchJson(`${API_BASE}/newsletter`, {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  },
};
