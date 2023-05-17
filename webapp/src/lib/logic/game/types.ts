import type { InterpreterFrom } from 'xstate'
import type { serverMachine } from '../machines/server/configured'

export type Game = {
  id: string
  name?: string | undefined
  machine: InterpreterFrom<typeof serverMachine>
}

/**
 * All messages that the server might send to the clients via WebSockets.
 */
export type ServerMessage = {
  type: 'players update'
  players: { id: string; name: string; isConnected: boolean }[]
}

/**
 * All messages that the clients might send to the server via WebSockets.
 */
export type ClientMessage = {
  type: `placeholder we don't have one yet`
}