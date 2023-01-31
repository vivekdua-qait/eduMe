Run the demo:

Installation
Execute the command, to install all the dependencies, and node_modules folder will be created:
npm install
Execution
1. Execute the tests tagged as 'Regression' in the feature file, through command
npx cypress run --env tags="@Regression"
2. To execute the same tests on chrome browser in headed mode
npx cypress run --env tags="@Regression" --headed --browser chrome
