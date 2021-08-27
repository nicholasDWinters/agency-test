# iron-forge-candidate-test-react

* The dealership inventory activity is the main screen of this project. It has been stubbed out already, and has a component file, a CSS module file, a GraphQL query file, and a data service layer file already set up. You will modify these files in order to complete the project. Any other components you make must follow the same naming conventions and folder structure.


* The GraphQL API is located at [https://candidate-api-2020-03.ironforge.co/graphql](https://candidate-api-2020-03.ironforge.co/graphql). Opening this link in a browser will open the GraphQL Playground, which you may use to explore the schema that is available to your project.


* All work in React must be done using functional components (`React.FC`). `class`es are not allowed in this project.


* Hooks must be used for things like state, references, and running GraphQL queries.


* To create a new query, create a `.graphql` file. Whenever you create a new query or modify an existing one, you must run `npm run genCode` on the command line in the root of the project in order to generate types and hooks. The generated file is located in `src/generated/graphql.tsx`.


* The types coming from GraphQL are meant to be used only as an interface between client and server. Once you get the data on the client, you must provide a data service layer (contained in the `dataService.ts` file for the appropriate component) that converts the data from the server types to client types. You cannot simply assign the data object coming from the server directly to the output of your data service. This keeps the client focused on types that make sense to use on the client, rather than having to try to bend the client components to use the server-centric types. It also reduces the client's dependencies on the server types. An example is provided in `src\components\activities\DealershipInventoryActivity\dataService.ts`.


* Before you run the project for the first time, run `npm i`.


* Run your project using `npm run start`. It should end up running at `http://localhost:3000`. If the project runs and displays a list of dealerships with IDs the first time you run it, you are ready to begin.


* Make it so that you must navigate to `http://localhost:3000/dealership/<dealership-id>` in order to view that dealership's page. For instance, if you go to `http://localhost:3000/dealership/a7fef0da-0e90-4e96-982d-f2340be94b97`, it should bring you to the dealership inventory page for "RV Kingdom."


* Use the Zeplin screen provided to you to construct the dealership inventory activity. You are responsible for downloading static images from Zeplin, such as the banner across the top of the page. Dynamic images -- for instance, dealership logos and vehicle images -- will come from the API.


* Any dynamic images that you display must fit within the bounds given in the design, and the images must not be stretched to fit. They must fit such that they are centered within the bounds, and any parts of the image outside of the bounds must be cut off.


* The custom fonts specified in Zeplin are all [Google Fonts](https://fonts.google.com/). Use `<link />` in `public/index.html` to import them into the app.


* You will be evaluated on how closely the activity matches the designs. Spacing, sizes, colors, and so forth will all be checked to see that they match exactly the specifications given in the Zeplin.


* Note that although measurements and colors given in Zeplin are exact, the CSS Zeplin produces is not meant to be copied verbatim. You must use your own best judgment as a web developer to determine how to construct the page styles. For instance, an element that spans the entire width of the page might, in Zeplin, have a fixed pixel width, like `width: 1000px;`. In the actual CSS, however, you would likely use a flexbox that stretches to fit the width of the page without using `width` at all.


* The information for **all** vehicles for the given dealership must be pulled down when the dealership's inventory page loads.


* Using the name filter input field (the one that, in the Zeplin, has the placeholder text "Search by name...") should do a simple substring filter of the vehicles shown using their names. This should be a case-insensitive filter. Again, this only filters through the data that has already been loaded from the API. It does not load different data.


* Using the vehicle type field (the one that, in the Zeplin, has the default value "All Inventory") should filter down to vehicles that have the given vehicle type. Note that the `name` of a `VehicleType` is meant to be unique, so you can use that as the programmatic value, whereas `displayName` is meant to be shown to the user. Again, this only filters through the data that has already been loaded from the API. It does not load different data.


* Vehicles should be sorted by name (case-insensitive).


* The card grid will always have 3 cards to a row. Any rows with fewer than 3 cards should display their contents such that they fill in from the left.


* As indicated by the name `priceCentsPerDay`, prices from the API are given in cents (USD). You must convert cents to dollars (USD) to display the price properly (100 cents = 1 dollar). You are not permitted to convert the price, at any point, to a floating-point representation, as floating-point representations are not appropriate for currencies.


* You are not permitted to use `!important` in CSS.


* The banner across the top (header) is meant to span the width of the page. Everything else on the page should be contained within a fixed-width container that is horizontally centered on the page. That is, aside from the header, the layout of the page should be constrained to a single, centered, fixed-width column, and should not attempt to expand to fit the available width of the page.


* You must create all components yourself; do not import libraries to create components.


* Do not add any extra dependencies to the project's `package.json`. You should be able to fulfill the requirements of the project with what has already been provided.


* Do not use additional technologies beyond what has already been provided. For instance, do not use Sass or Less instead of CSS.


* Use `npm`; do not use `yarn` or any other package management systems.


* Complexity is a cost. In real-world client development work, adding extras that are out of scope can add more opportunities for bugs and delay project timelines. Do not add extra functionality that goes beyond the scope of these requirements (for instance, mobile-responsive behavior, animations, etc.).


* You will be evaluated on how well you are able to reasonably separate out UI elements into distinct components. This includes how well you employ the single-responsibility principle and encapsulation.


* You will be evaluated on the straightforwardness, readability, correctness, and organization of your implementation.
