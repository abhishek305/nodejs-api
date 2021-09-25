# NodeJS Express API To Query String Params Into Response

## Demo URL: 
  link : https://query-api-nodejs.herokuapp.com/?name=test-name

1. Clone repo or download the zip file.
2. Unzip the folder & navigate to the root directory in an appropriate code editor.
3. Enter ```npm install ``` in the terminal.
4. Enter ``` npm start ``` in the terminal to start the development server (i.e. on port 3000).
5. Now navigate to any browser and enter https://localhost:3000
6. To test the API try to enter query params as per given example: https://localhost:3000/?name=name_here
7. You'll get a JSON resposne as shown below:

  ```  
        {
          statusCode:200,
          meassage:"success",
          response:"Happy Birthday your name entered on query params"
        }
