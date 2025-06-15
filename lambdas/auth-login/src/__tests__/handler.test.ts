import { createHandler } from '../handler';
import { APIGatewayEvent } from 'aws-lambda';

describe('handler', () => {
  const baseEvent = {
    httpMethod: 'POST',
    path: '/login',
  } as APIGatewayEvent;

  test('returns 400 when missing parameters', async () => {
    const handler = createHandler(async () => true);
    const res = await handler({ ...baseEvent, body: '{}' } as any);
    expect(res.statusCode).toBe(400);
  });

  test('returns 401 for invalid credentials', async () => {
    const handler = createHandler(async () => false);
    const res = await handler({ ...baseEvent, body: '{"email":"a","password":"b"}' } as any);
    expect(res.statusCode).toBe(401);
  });

  test('returns 200 for valid credentials', async () => {
    const handler = createHandler(async () => true);
    const res = await handler({ ...baseEvent, body: '{"email":"a","password":"b"}' } as any);
    expect(res.statusCode).toBe(200);
  });
});
