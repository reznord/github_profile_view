## Question

Render the details of the github user

- The app should render an `<input />` that accepts any valid nickname only with the latest input value.
- on input change, make an API request to the Github API and get details of the user,
- store results in a Redux store
- do not make an API request if results are already in store

Uses the following github API URL `https://api.github.com/users/${username}` to GET the response.