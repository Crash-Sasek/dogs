# Design

By default, I wanted all of the dog breeds to show on the screen. When you click on one of the attribute buttons on the top, you should be able to filter the results by desired traits. You should be able to search by multiple traits or multiple values listed under the same trait, like "Characteristics" or "Common Health Problems”.  

I started by changing the csv file into a json file and then copying the data in to a .js file so I could easily import the data to use. From there, I created a AtttributeSelector file that would allow me to generate an input field by clicking on an attribute. Once it was working, I moved the useState to the main App.js file. To start, I was keeping “searchTerm” and “selectedAttribute” as props in state to be passed down from this parent file. They were written as strings (This would cause a headache for me later) while I tried to get the first search working.

Next, I started creating the SearchResults file. I chose to return the tiles by using a map to iterate through each object to generate a tile or “box-container”. Then, above, I created a filter that took arguments of “selectedAttribute and searchTerms”. These converted the input from the search bar to lower case as well as the “attribute data”. For now, the first search was working but I had a big issue when I loaded up the page the second time. I kept receiving an error that .toLowerCase() was unable to read an empty state (this is likely not 100% correct. I forgot what the error exactly was). I filled in the states with a data point for the time being and that seemed to fix the issue. 

From here, I needed to find a way to keep arrays in state so that I could have multiple search bars filtering each key at the same time (our “AND” operator). This is where things got tricky for me. I update my App.js file to pass on arrays instead of strings which meant I would get an error if I clicked on more than one button now (I still has “default” values in my useState).  

In the AttributeSelector, I added a spread operator with an empty string on the end of it. This allowed me to include additional inputs whenever an attribute button was clicked. Below that, I edited my handleSearchTermOnChange function to take two arguments, an input change event and the index of the input being changed. I used another spread operator along with a slice method to iterate through the elements for searchTerms and replace its value at the specified index with a new value entered by the user.

But, I still had one problem, I was still getting errors every time I clicked more than one button. After staring at my code for a lot longer than I care to admit and searching the web for fixes, I knew that It needed a value to display the tiles but was unsure of what to use. I tried adding a “true” value to the end of the code and that seemed to fix the issue. It turns out, I didn’t need to pass down the value to load the page, I just needed my filteredData value to not return false.

I had a lot of fun working on this assignment and learning about javascript/frontend!


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
