# Node-Framework

A light-weighted nodejs framework

## Controllers

The controllers are in the directory:

1. `/app/api/`
2. `/app/web/`

## Views

The views are in `/views/`

Layouts are in `/views/layouts/`

Partials are in `/views/partials/`

## Static Files

All static files are in `/public/`

It contains all **CSS**, **JavaScripts** and other files like **images** etc.


## Routing

All routes are stored in **routes.js**
There are two type of routing:

1. For `API`
2. For `Website`

The endpoint you mention will be as follows:
```javascript
"METHOD URL" : "Controller_Name.Function_Name"
```
here `METHOD` will be: `{"GET", "POST", "PUT", "DELETE"}` and so on as mentioned in express.js documentation for routing methods.
The URL will automatically be prepended by the type of routing. For example:
```javascript
api: {
     "GET /home/books": "Home.index"
}
```
above will be converted to url: `/api/home/books`

## Policies

Policies are the middlewares, generally used for intercepting url requests specified in **policies.js**

The policies are in the directory: `/app/policies/`

All policies can have only one function named as **"index"**.

There are three type of policies:

1. For all controllers
2. For all handlers (functions)
3. For specific handler

For all Controller/Handler, use **asterisk symbol(*)** as follows:
```javascript
"*" : "PolicyName"
```
OR
```javascript
"*" : ["PolicyName1", "PolicyName2"] // policies will be executed in order
```
The `Controller/Handler Name` you mention will be as follows:
```javascript
"Controller/Handler Name" : "PolicyName"
```
OR
```javascript
"Controller/Handler Name" : ["PolicyName1", "PolicyName2"]
```
If in place of `PolicyName` **true/false** is used then that Controller/Handler will be **Allowed/Blocked** to execute.

If **"*"** as well as "Controller/Handler" is not mentioned then by **default** that Controller/Handler will be **allowed to execute**.

> **Note:** If a Controller/Handler is mentioned then it will override the policies defined by **"*"**.

Following will be structure:
```javascript
{
  "api": {
    "*" : PolicyName,
    "Controller_1": PolicyName,
    "Controller_2": {
      "*": PolicyName,
      "Handler_1": PolicyName,
      "Handler_2": PolicyName
    }
  },
  "web": {
    "*" : PolicyName,
    "Controller_1": PolicyName,
    "Controller_2": {
      "*": PolicyName,
      "Handler_1": PolicyName,
      "Handler_2": PolicyName
    }
  }
}
```
