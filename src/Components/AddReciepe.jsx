import React, { useState } from 'react';
import { addRecipe } from '../Services/allAPI';

function AddReciepe() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
    prepTimeMinutes: '',
    cookTimeMinutes: '',
    servings: '',
    image: null // New state for the image file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      image: e.target.files[0] // Set the image file in the state
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRecipe(formData);
      alert('Recipe added successfully');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('An error occurred while adding the recipe');
    }
  };

  return (
    <>
    <h2 className="text-center mb-4 m-2">Add Recipe</h2>
    <div className="container bg-dark text-black mt-4 mb-4 p-5">
      
      <form onSubmit={handleSubmit} style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px' }}>
        <div className="mb-4">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} className="form-control"></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions" value={formData.instructions} onChange={handleChange} className="form-control"></textarea>
        </div>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="prepTimeMinutes">Prep Time (minutes):</label>
            <input type="number" id="prepTimeMinutes" name="prepTimeMinutes" value={formData.prepTimeMinutes} onChange={handleChange} className="form-control" />
          </div>
          <div className="col-md-6">
            <label htmlFor="cookTimeMinutes">Cook Time (minutes):</label>
            <input type="number" id="cookTimeMinutes" name="cookTimeMinutes" value={formData.cookTimeMinutes} onChange={handleChange} className="form-control" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="servings">Servings:</label>
          <input type="number" id="servings" name="servings" value={formData.servings} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-4">
          <label htmlFor="image">Image:</label>
          <input type="file" id="image" name="image" onChange={handleImageChange} className="form-control" />
        </div>
        <div className='d-flex text-center justify-content-center'>
        <button type="submit" className="btn btn-primary">Add Recipe</button>

        </div>
      </form>
    </div>
    </>
    
  );
}

export default AddReciepe;
