// RecipeDetailsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipePage.css';

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        setSelectedRecipe(response.data.meals ? response.data.meals[0] : null);
      } catch (error) {
        console.error('Error fetching details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='container'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        selectedRecipe && (
          <div className='recipeContainers'>
            <div style={styles.imageContainer}>
              <img
                src={selectedRecipe.strMealThumb}
                alt={selectedRecipe.strMeal}
                style={styles.recipeImage}
              />
            </div>
            <div style={styles.detailsContainer}>
              <h2 style={styles.recipeName}>{selectedRecipe.strMeal}</h2>
              <h3>Details:</h3>
              <p>Origin: {selectedRecipe.strArea}</p>
              <p>Tags: {selectedRecipe.strTags}</p>
              <p>
                Video:{' '}
                {selectedRecipe.strYoutube && (
                  <a href={selectedRecipe.strYoutube} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                )}
              </p>
              <h4>Ingredients:</h4>
              <p style={styles.ingredientsList}>
                {Object.keys(selectedRecipe)
                  .filter((key) => key.startsWith('strIngredient') && selectedRecipe[key])
                  .map((key) => selectedRecipe[key])
                  .join(', ')}
              </p>
              <h4>Instructions:</h4>
              <p>{selectedRecipe.strInstructions}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};
const styles = {
  imageContainer: {
    flex: '1',
    marginRight: '20px',
  },
  recipeImage: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  detailsContainer: {
    flex: '2',
    textAlign: 'left',
  },
  recipeName: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  ingredientsList: {
    margin: '0',
    fontSize: '16px',
  },
};

export default RecipeDetailsPage;
