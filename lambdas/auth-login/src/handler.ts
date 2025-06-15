import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';
import { LoginUseCase } from './application/usecases/LoginUseCase';

export const createHandler = (loginUseCase: LoginUseCase): APIGatewayProxyHandler =>
  async (event: APIGatewayEvent) => {
  console.log('Event received:', JSON.stringify(event));

  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const { email, password } = body;

    if (!email || !password) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Email and password required' }),
      };
    }

    const success = await loginUseCase(email, password);

    if (!success) {
      return {
        statusCode: 401,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Invalid credentials' }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Login successful' }),
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

