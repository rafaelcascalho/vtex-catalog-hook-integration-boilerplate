# VTEX Catalog Hook integration boilerplate

This is a simple boilerplate for integration with the catalog hook from 
[vtex catalog affiliates](https://help.vtex.com/en/tutorial/integration-guide-consuming-catalog-information-for-use-in-an-external-service).

## Prerequisites

You must have installed `nodejs` at least **v14.15.2**.
[Click here to see an instalation guide](https://nodejs.org/en/download/package-manager/#windows).

## Setup

The setup only requires you to execute the command below:

```bash
$ npm i
```

This command will:

> - Install the project default depenencies
> - Create a .env file for your project

## Run

To run the project just run the command below:

```bash
$ npm run dev:http
```

Now you can simulate the request to your endpoint according to the docs with a curl such as:

```json
curl --request POST \
  --url https://30d32d8c740f.ngrok.io/skus \
  --header 'Content-Type: application/json' \
  --data '{
  "IdSku": "42",
  "ProductId": 23,
  "An": "accountname",
  "IdAffiliate": "ZZZ",
  "Version": "00000000000000000000000000000000",
  "DateModified": "2021-02-23T15:57:04.0801201Z",
  "IsActive": true,
  "StockModified": false,
  "PriceModified": false,
  "HasStockKeepingUnitModified": true,
  "HasStockKeepingUnitRemovedFromAffiliate": false
}'
```

If you use [insomnia](https://insomnia.rest/) or [postman](https://www.postman.com/)
just import it and execute it with the server running to test the project running.

## Deploy

To deploy this project, you need to generate the `SSL` files and place them with
the expected name listed down below in the `ssl/` folder:

- serverKey.pem : key file
- serverCert.pem : certificate file

With that done, just run the project with the command down below:

```
$ npm run prod
```

Done. Your server is running with `SSL` in production.

PS: 
1. Depending on your deployment service or `VPS`, more configurations or even
a reverse proxy might be required;

2. In production environments, monitors such as [PM2](https://pm2.keymetrics.io/) 
are pretty handy and very simple to use and even to automate parts of the deployment process.
