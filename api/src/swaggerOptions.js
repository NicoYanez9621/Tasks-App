export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "tasks api",
      version: "1.0.0",
      description: "Una simple api de tareas",
    },
  },
  servers: [
    {
      url: "http://localhost:3001",
    },
  ],
  apis: ["./routes/*.js"],
};
