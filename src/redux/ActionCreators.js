import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { sha256 } from 'js-sha256';

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});
//send the comments to the back-end
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  };
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'crear-comments', {
    method: "POST",
    body: JSON.stringify(newComment),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('post comments', error.message); alert('Your comment could not be posted\nError: ' + error.message); });
};
// get for the recipes
export const fetchDishes = () => (dispatch) => {

  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'ver-recipe')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}
//the prevent actions
export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

export const addDish = (dish) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dish
});

export const postDish = ( name, ingredients, description, procedure, photos) => (dispatch) => {

  const newDish = {
    name: name,
    ingredients: ingredients,
    procedure: procedure,
    photos: photos,
    description: description
  };
  newDish.recipe_id = sha256(JSON.stringify(newDish));
  newDish.date = new Date().toISOString();

  alert("El json es " + JSON.stringify(newDish));

  return fetch(baseUrl + 'crear-recipeee', {
    method: "POST",
    body: JSON.stringify(newDish),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addDish(response)))
    .catch(error => { console.log('post dishes', error.message); alert('Your dish could not be posted\nError: ' + error.message); });
};


//get the ingredients

export const fetchIngredients = () => (dispatch) => {

  dispatch(ingredientsLoading(true));

  return fetch(baseUrl + 'ver-ingredient')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(ingredients => dispatch(addIngredients(ingredients)))
    .catch(error => dispatch(ingredientsFailed(error.message)));
}

export const ingredientsLoading = () => ({
  type: ActionTypes.INGREDIENT_LOADING
});

export const ingredientsFailed = (errmess) => ({
  type: ActionTypes.INGREDIENT_FAILED,
  payload: errmess
});

export const addIngredients = (ingredients) => ({
  type: ActionTypes.ADD_INGREDIENT,
  payload: ingredients
});

// get the diferent comments
export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'ver-comments')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errmess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

//this will be deleted
export const fetchPromos = () => (dispatch) => {

  dispatch(promosLoading());

  return fetch(baseUrl + 'promotions')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

//post a new user
export const postUser = (firstName, lastName, username, email, password, age, gender) => (dispatch) => {

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    username: username,
    email: email,
    password: password,
    age: age,
    gender: gender
  };

  return fetch(baseUrl + 'users', {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
      error => {
        throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addUsers(response)))
    .catch(error => { console.log('post users', error.message); 
    alert('Your user could not be posted\nError: ' + error.message); });
};

export const addUsers = (users) => ({
  type: ActionTypes.ADD_USERS,
  payload: users
});

export const UsersFailed = (errmess) => ({
  type: ActionTypes.USERS_FAILED,
  payload: errmess
});

// send the login data
export const postLogin = (username, password) => (dispatch) => {

  const newLogin = {
      username: username,
      password: password
  };
  
  return fetch(baseUrl + 'login', {
      method: "POST",
      body: JSON.stringify(newLogin),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
      throw error;
    })
  .then(response => response.json())
  .catch(error =>  { console.log('post login', error.message); alert('no se pudo completar \nError: '+error.message); });
};
