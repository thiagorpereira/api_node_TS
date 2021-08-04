import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  /*   private categoriesRepository: ICategoriesRepository;
  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository;
  } */
  constructor(private categoriesRepository: ICategoriesRepository) { } 

  execute({ description, name }: IRequest): void {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryUseCase }
