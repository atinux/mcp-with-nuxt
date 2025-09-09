/***
 Workaround for using zod 3 for the mcp validation
 Read here: https://github.com/modelcontextprotocol/typescript-sdk/issues/906
 */
import { z } from 'zod/v3'
import { createMcpHandler } from 'mcp-handler'
import { getHeader, defineEventHandler, fromWebHandler } from 'h3'

const mcpHandler = createMcpHandler((mcpServer) => {
  mcpServer.tool(
    'echo',
    'Echo a message',
    { message: z.string() },
    async ({ message }) => ({
      content: [{ type: 'text', text: `Tool echo: ${message}` }]
    })
  )

  mcpServer.tool(
    'roll_dice',
    'Rolls an N-sided die',
    {
      sides: z.number().int().min(2)
    },
    async ({ sides }) => {
      const value = 1 + Math.floor(Math.random() * sides)
      return {
        content: [{ type: 'text', text: `🎲 You rolled a ${value}!` }]
      }
    }
  )
}, {
  // Optional server options
})

export default defineEventHandler((event) => {
  if (getHeader(event, 'accept')?.includes('text/html')) {
    return '<p>Please use a MCP client to interact with this endpoint.</p>'
  }
  return fromWebHandler(mcpHandler)(event)
})
