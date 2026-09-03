import { createMockApiServer } from './app.js';

const port = Number.parseInt(process.env.PORT || '8080', 10);
const server = createMockApiServer();

server.listen(port, () => {
  console.log(`mock-api listening on http://localhost:${port}`);
});
