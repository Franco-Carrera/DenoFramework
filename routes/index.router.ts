import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as usersController from "../controllers/index.controller.ts";

const router = new Router();

router.get("/", usersController.getAllUsers);
router.post("/", usersController.saveUser);
router.get("/users", usersController.getQuery);
router.get("/:id", usersController.getUserById);

///Importante su orden.
//:id debajo

export default router;
