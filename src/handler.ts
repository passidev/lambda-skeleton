import { APIGatewayProxyHandler, APIGatewayEvent } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
    console.log('Event received:', JSON.stringify(event));

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda Auth Service!",
        }),
    };
};

if (require.main === module) {
    const mockEvent = {
        httpMethod: 'GET',
        path: '/test',
        body: null,
    } as APIGatewayEvent;

    handler(mockEvent, {} as any, () => {});
}