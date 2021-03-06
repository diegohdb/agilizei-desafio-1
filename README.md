
<h1 align="left">:computer: Agilizei - Desafio 01  </h1>

Agilizei Desafio 01 Solution using Cypress  

## Introduction
This project contains the interface test automation of the <a href="http://automationpractice.com/">automation practice website</a>. 
The automation will cover only the new user registration flow.

## Environment Setup
**Prerequisites:** 
* <a href="https://nodejs.org/en/download/"> NodeJS </a> 

1. Clone the project

2. To initialize the project issue the below command in project root directory.
```
npm install
```


## How to run?

Issue the below commands in project root directory:
```
npm run cy:open
```

Or for headless mode:
```
npm run cy:run
```

## Reports

In the project, two report generators were used:

- Mochawesome 

Generate the Mochawesome reports after test execution:
```
npm run report:merge & npm run report:mocha
```


## Continuous Integration
The Github Actions is configured for this project, and the Github Pages will show the reports in _.html_ format <a href="https://diegohdb.github.io/agilizei-desafio-1/">here</a>. 


## Author
<a target="_blank" href="https://github.com/diegohdb/diegohdb">👤 Diego Bezerra </a>

<a target="_blank" href="https://www.linkedin.com/in/diegohdb/">
  <img align="left" alt="LinkdeIN" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
</a>
<a target="_blank" href="https://www.instagram.com/diegohdb/">
  <img align="left" alt="Instagram" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" />
</a>
<a target="_blank" href="mailto:diegohdb@gmail.com">
  <img align="left" alt="Gmail" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg" />
</a>
