# ds-next

Next.js web client for displaying show content, live events, and enabling purchases

## Getting started

### Step 1. Create a file for local environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

### Step 2. Input GraphCMS environment variables

Inside the GraphCMS project dashboard, navigate to thee **Settings > API Access** page. Then set the variables in `.env.local`:

- `GRAPHCMS_PROJECT_API`: Set it to the API endpoint under **Endpoints** at the top of the page.
- `GRAPHCMS_PROD_AUTH_TOKEN`: Copy the production API token from the page. This will only query content that is published.
- `GRAPHCMS_DEV_AUTH_TOKEN`: Copy the dev API token from the page. This will only query content that is in draft.

### Step 4. Run dev server

Run the project with `yarn` (requires `yarn`, install with `npm install --global yarn`):

```bash
yarn dev
```

## Contributing

TODO!

## Testing

TODO!

## Deployment

TODO!
