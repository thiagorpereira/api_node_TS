import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (req, resp) => {
  const { name, description } = req.body;

  categoriesRepository.create({ name, description })

  return resp.status(201).send();
})

export { categoriesRoutes }