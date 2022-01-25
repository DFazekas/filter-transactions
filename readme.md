# Developing Locally

Google Cloud Functions provides you a framework for developing locally, reducing how frequently you need to deploy.

## Local Hosting

First, navigate to the root of the cloud function (i.e., alongside _package.json_), then run the command `npm run start`. This will:

1. Spin-up a local server that hosts the individual cloud function.

## Triggering Local Function

Using a tool such as Postman, paste the local function address as a **POST** request with the following body (in JSON):

```JSON
{
    "category_ids": [
        "a5cf2326-5..."
    ],
    "transactions": [
        {
            "id": "65cc7019-b9...",
            "date": "2021-11-01",
            "amount": -46450,
            "memo": "Oct 2021",
            "category_name": "Hydro",
            "category_id": "a5cf2326-5..."
        }
    ]
}
```

### Authentication

You must be logged into gCloud with an account within the same project as the cloud function, and have cloud function invoker permissions.

To log into gCloud, use the following command: `gcloud auth login`.

### Reloading

The server will **not** hot-reload, so you're required to shutdown (`CTRL-C`) and restart the server (`npm run start`) everytime you want to view new changes.

# How to Deploy

Once you're ready to push your code to the Google Cloud Project, run the following command: `npm run deploy`. This will:

1. Deploy the cloud function to a virtual machine.
