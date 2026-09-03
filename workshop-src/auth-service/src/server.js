import { createAuthServer } from './app.js';

const port = Number.parseInt(process.env.PORT || '3000', 10);
const server = createAuthServer();

server.listen(port, () => {
  console.log(`auth-service listening on http://localhost:${port}`);
});
