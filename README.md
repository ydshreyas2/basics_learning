This file is set to record the progress of the step by step approach to learn aws amplify, IAM , DynamoDB, S3, Lambda, Gateway

*First draft*

# User Records Web App

A simple web app built with **HTML, CSS, and JavaScript**, hosted on **AWS Amplify**, and connected to **AWS DynamoDB**.

## Features
- Enter a name → stored in DynamoDB with timestamp.
- Displays all records in a table.
- Simple frontend with no frameworks.
- Calls AWS Gateway api which connects to a lambda function that inturn appends the aws dynamodb and retrieves the full list to be displayed on the browser when they press "submit" 