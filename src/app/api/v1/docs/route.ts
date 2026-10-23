import { NextResponse } from 'next/server';

export async function GET() {
  const openApiSpec = {
    openapi: '3.0.0',
    info: {
      title: 'The Itti Foundation Public REST API',
      version: '1.0.0',
      description: 'API for The Itti Foundation (Itti’s Skill School Foundation) Section 8 non-profit.',
      contact: {
        name: 'The Itti Foundation',
        email: 'hello@itti.org.in',
        url: 'https://itti.org.in',
      },
    },
    servers: [
      {
        url: '/api/v1',
        description: 'Primary v1 API Endpoint',
      },
    ],
    paths: {
      '/health': {
        get: {
          summary: 'Health check and database latency monitor',
          responses: {
            '200': { description: 'Service operational' },
          },
        },
      },
      '/commitments': {
        get: {
          summary: 'List the three foundational commitments (Neurodivergence, Cancer Care, Conservation)',
          responses: {
            '200': { description: 'List of commitments' },
          },
        },
      },
      '/projects': {
        get: {
          summary: 'List all verified programs with category filtering, search, and pagination',
          parameters: [
            { name: 'category', in: 'query', schema: { type: 'string' } },
            { name: 'q', in: 'query', schema: { type: 'string' } },
            { name: 'page', in: 'query', schema: { type: 'integer', default: 1 } },
            { name: 'limit', in: 'query', schema: { type: 'integer', default: 10 } },
          ],
          responses: {
            '200': { description: 'Paginated projects list' },
          },
        },
      },
      '/events': {
        get: {
          summary: 'List upcoming webinars, volunteer syncs, and offline workshops',
          responses: {
            '200': { description: 'Events calendar' },
          },
        },
      },
      '/marketplace': {
        get: {
          summary: 'List verified artisan crafts and indicative direct prices',
          parameters: [
            { name: 'category', in: 'query', schema: { type: 'string' } },
          ],
          responses: {
            '200': { description: 'Products catalog' },
          },
        },
      },
      '/contact': {
        post: {
          summary: 'Submit a general, partnership, or data protection inquiry',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'email', 'message'],
                  properties: {
                    name: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    message: { type: 'string' },
                    honeypot: { type: 'string' },
                  },
                },
              },
            },
          },
          responses: {
            '201': { description: 'Inquiry received' },
            '400': { description: 'Validation failed' },
          },
        },
      },
      '/volunteers': {
        post: {
          summary: 'Submit a volunteer application with skill details and availability',
          requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'email', 'pillar', 'availability', 'skills'],
                  properties: {
                    name: { type: 'string' },
                    email: { type: 'string', format: 'email' },
                    phone: { type: 'string' },
                    pillar: { type: 'string' },
                    availability: { type: 'string' },
                    skills: { type: 'string' },
                  },
                },
              },
            },
          },
          responses: {
            '201': { description: 'Volunteer application submitted' },
          },
        },
      },
      '/memberships': {
        post: {
          summary: 'Register for community membership with strict DPDP Act 2023 guardian checks for under-18s',
          responses: {
            '201': { description: 'Registration recorded' },
          },
        },
      },
      '/newsletter': {
        post: {
          summary: 'Subscribe to foundation updates with explicit consent',
          responses: {
            '201': { description: 'Subscribed' },
          },
        },
      },
    },
  };

  return NextResponse.json(openApiSpec);
}
