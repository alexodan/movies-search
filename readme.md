## How to run it

### Backend

Go to the movies-search-back folder, run `npm install` and then `npm start`.
<br>I'm using [The Movie Database API](https://developers.themoviedb.org/) to display data about popular movies.
<br>You will need to provide an `API_KEY` in order to use it, once you get one go ahead and modify the `.env` file. You can also modify there the port in which the application will start listening but the frontend part will hit to that port, so I don't recommend it.

### Frontend

Go to the movies-search-front folder, run `npm install` and then `npm start`.
<br>The application will automatically open a new tab on port 3000 as I used create-react-app.

## About the tools

- I used express in the backend as I'm comfortable using it.
- I used create-react-app because is very easy to get started with.
- I added Tailwind because I like the utilities provided.

## The assignment

Your task is to create a full stack web application which utilizes a free, public API to pull data from
and to display that data in the form of a table in the UI. Your backend should access the public API and your frontend should access the backend you set up.

### Requirements

- Application should be full stack.

- A server built with Node.js. All other library and framework choices are up to you.

- Data is pulled from a public API. (Here is an example of the type of API you can use https://developers.themoviedb.org/3/movies/get-popular-movies)

- A UI which displays data in a table. This data is retrieved from your server.

- Some sort of filter functionality on the table. This should filter the data client-side and show the filtered data.

- Send us back a link to a git repository with your finished project. There is no requirement to host your finished project.

### Optional suggestions

- Implement pagination, rows per page, or search functionality of your chosen endpoint with query strings or URL params.

- Make the UI look like a full web page, however the bare minimum is just a table.
