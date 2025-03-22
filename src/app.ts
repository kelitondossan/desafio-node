import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import { authMiddleware } from "./config/auth";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.json";

const app = express();

app.use(cors());
app.use(express.json());

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Aplica auth global para todas as rotas protegidas
app.use(authMiddleware);

// Usa seu router com todas as rotas declaradas já com prefixos
app.use(router);

export { app };
