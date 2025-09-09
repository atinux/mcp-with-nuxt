# Nuxt MCP Server Template

This is a simple Nuxt application that serves as a MCP server using the [Streamable HTTP Server Transport](https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http).

Update `server/routes/mcp.ts` with your tools, prompts, and resources following the [mcp-handler](https://github.com/vercel/mcp-handler/tree/main) documentation.

The MCP server is mounted on `/mcp`.

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on another terminal on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Notes for running on Vercel

Make sure you have [Fluid compute](https://vercel.com/docs/functions/fluid-compute) enabled for efficient execution

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatinux%2Fmcp-with-nuxt)

## Sample Client

`script/test-client.mjs` contains a sample client to try invocations.

```sh
node scripts/test-client.mjs http://localhost:3000
```
