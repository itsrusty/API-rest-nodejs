import { Router } from "express";
import { getEmployees, createEmployees, deleteEmployees, updateEmployees, getEmployee} from "../controllers/employees.controller.js";

const router = Router();

// endpoints
router.get("/get", getEmployees);

router.get("/get/:id", getEmployee);

// add employees
router.post("/create", createEmployees) 

// update employees
router.put("/update", updateEmployees)

// delete employees
router.get("/delete/:id", deleteEmployees)



export default router