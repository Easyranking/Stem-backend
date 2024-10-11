import { Router } from "express";
import {
  createAccount,
  loginAccount,
  readSingleAccount,
  stage1Score,
  stage2Score,
  stage3Score,
  stage4Score,
  userAccount,
} from "../controller/userController";

const router: Router = Router();

router.route("/register").post(createAccount);
router.route("/login").post(loginAccount);
router.route("/stage-one/:userID").patch(stage1Score);
router.route("/stage-two/:userID").patch(stage2Score);
router.route("/stage-three/:userID").patch(stage3Score);
router.route("/stage-four/:userID").patch(stage4Score);
router.route("/user/:userID").get(readSingleAccount);
router.route("/users/").get(userAccount);
export default router;
