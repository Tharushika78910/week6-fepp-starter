## Iteration 6

 ### Question 2.1 - What is the purpose of userSchema.statics.login in userModel.js?
 - userSchema.statics.login is a static method on the User model that performs all login-related logic such as validating fields, checking if a user exists, comparing hashed passwords, and returning the authenticated user. It keeps authentication logic inside the model (Iterations 1–5), making controllers simpler. In backend-v2, this method is removed and all login logic is moved into the controller instead.

 ### Question 2.2 - Compare User.findOne({ email }) to this.findOne({ email }). When and why do we use this instead of the model's name?

 - User.findOne({ email }) is used outside the schema (e.g., in controllers) and directly references the imported User model.

   this.findOne({ email }) is used inside a Mongoose static method, where this refers to the model that will be created from the schema.

   We use this inside schema methods because it keeps the method independent of a specific model name, avoids circular dependencies, and allows the model to be renamed without breaking the code.
 
 ### Question 2.3 - Why is bcrypt imported in userController.js and not in userModel.js in this version?

 - In backend-v2, bcrypt is imported in userController.js because all authentication logic (hashing passwords, comparing passwords, validating  input) has been moved from the model into the controller.

    The model in backend-v2 is intentionally kept “dumb” — it only defines the data structure and does not perform any logic.

    Therefore, there is no need for bcrypt inside userModel.js, because the model does not hash or compare passwords anymore. All security logic happens directly in the controller, so import statements belong there.

 ### Question 3 - Discuss which approach you plan to use for your project and explain why.
 - For this project, I plan to use the backend-v2 style, where the authentication logic (validation, password hashing, and login checks) lives in  the controller instead of in Mongoose static methods on the model because Clear separation of concerns and easier to follow and debug.



 
## Iteration 7

 ### Question 2.1 - What is the purpose of userSchema.statics.signup in userModel.js?

  - userSchema.statics.signup centralizes all logic for creating a new user validation, hashing, and saving so that it’s reusable, secure, and separate from route/controller code.

 ### Question 2.2 - Compare User.create({ email, password: hash }) to this.create({ email, password: hash }). When and why do we use this instead of the model's name?

  - Inside Mongoose statics, this = the model. We use this so the method works even before the model exists, and remains flexible and maintainable.

 ### Question 2.3 - Why is validator imported in userController.js and not in userModel.js in this version?

  - The validation logic (email/password checks) is no longer inside the Mongoose model’s static methods. It now lives in the controller, so the controller needs the validator library—not the model.

 ### Question 3 - Discuss which approach you plan to use for your project and explain why.

  - I chose controller based validation because it keeps the project structure simpler, clearer, and easier to maintain. The model stays lightweight, and all request handling, logic including validation remains where HTTP requests are actually processed.

