import axios from 'axios';

const baseUrl = 'http://localhost:8001/recipes'; // Adjust the base URL according to your server configuration

// Function to fetch all recipes
export const getAllRecipes = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error; // You can choose to handle errors here or propagate them to the caller
  }
};

// Function to search for recipes based on a query string
export const searchRecipes = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}?search=${searchKey}`);
    return response.data;
  } catch (error) {
    console.error('Error searching for recipes:', error);
    throw error;
  }
};

// Function to add a new recipe
export const addRecipe = async (recipeData) => {
  try {
    const response = await axios.post(baseUrl, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

// Function to delete a recipe by ID
export const deleteRecipe = async (recipeId) => {
  try {
    const response = await axios.delete(`${baseUrl}/${recipeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};

// Function to update a recipe by ID
export const updateRecipe = async (recipeId, updatedRecipeData) => {
  try {
    const response = await axios.put(`${baseUrl}/${recipeId}`, updatedRecipeData);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};
