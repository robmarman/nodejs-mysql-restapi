import { Router } from "express";
import { getEmployees, getEmployee, createEmployees, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();

router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee)

router.post('/employees', createEmployees)

// put se usa para actualizar todo. Es mas una convencion de nombres, porque lo importante es la consulta ejecutada
router.put('/employees/:id', updateEmployee)

// patch solo actualiza algunos datos
router.put('/employees/:id', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

export default router;