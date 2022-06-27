import { Recipe } from '../../model/Recipe'

export interface AddRecipeRequestDTO {
    token: string
    title: string
    description: string
}

export interface AddRecipeRepository {
  add(recipe: Recipe): Promise<void>
}
