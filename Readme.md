# Assignment

## Frontend

It should get a configuration json from BE which instructs the FE what input fields to have and their validation for each page of the forms. Use React/React Native for web or mobile.

- Page 1
  - [required] name: string
  - [required] gender: select from M, F and Nonbinary
  - [required] age: number
- Page 2
  - [required] profession: select from “Owner”, “Agent”, “Buyer” and “Seller”. Allow custom input
  - [required] what services do you need?: custom input
- Page 3
  - [Options]How did you find us?
  - Submit button: the submission should send the data entered above to the server

The form times out in 30 mins. The timeout threshold should be configurable through the config json as well. Upon timeout, if the form is not submitted, the user will be redirected to page 1 and all storage reset.

## Backend

1. endpoints for FE to get the config json
2. endpoints to receive the submission data from FE with data validation. Data persistence is a bonus but not required

## Contribute

- Use the follwong command to start the development server:

```bash
docker compose -f docker-compose-dev.yaml up
```

- Open link http://localhost:8080 in browser
