import "dotenv/config";
import { app } from './app.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Index: Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
}

startServer();

console.log("Hello, World!");
console.log(process.env.OPENAI_API_KEY);