import ExerciseController from "../controller/ExerciseController";
import { Router } from "express";

const router = Router()

//Obtener listado completo de ejercicios
router.get('/', ExerciseController.getAll);

//Crear nuevo ejercicio
//Verificar por que no entra a la funcion, posible error en como se esta llamando desde postman
router.post('/', ExerciseController.newExercise);

export default router;


