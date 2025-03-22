import { Router } from "express";
import { CreateOrderController } from "../useCases/createOrder/CreateOrderController";
import { CreateOrderUseCase } from "../useCases/createOrder/CreateOrderUseCase";
import { OrderController } from "../controllers/OrderController";
import { UpdatePaymentStatusUseCase } from "../useCases/updatePaymentStatus/UpdatePaymentStatusUseCase";
import { UpdatePaymentStatusController } from "../useCases/updatePaymentStatus/UpdatePaymentStatusController";

const router = Router();

const createOrderUseCase = new CreateOrderUseCase();
const createOrderController = new CreateOrderController(createOrderUseCase);

const orderController = new OrderController();

const updatePaymentStatusUseCase = new UpdatePaymentStatusUseCase();
const updatePaymentStatusController = new UpdatePaymentStatusController(updatePaymentStatusUseCase);

router.post("/orders", (req, res) => createOrderController.handle(req, res));
router.get("/orders", (req, res) => orderController.listAll(req, res));
router.get("/orders/:id", (req, res) => orderController.getById(req, res));

router.post("/webhook/payment", (req, res) => updatePaymentStatusController.handle(req, res));

export { router };
