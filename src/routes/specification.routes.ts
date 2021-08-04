import { response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
})

export { specificationRoutes };
