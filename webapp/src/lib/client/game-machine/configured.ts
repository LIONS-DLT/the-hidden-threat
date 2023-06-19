import { machine } from './machine'
import { assign, fromPromise } from 'xstate'
import type { Actions, ClientEventOf } from './types'
import type { ClientMessage } from '$lib/game/types'

export const getClientGameMachine = ({
  send,
  actions,
}: {
  send: (message: ClientMessage) => void
  actions: Actions
}) =>
  machine.provide({
    actions: {
      consoleLogValue: ({ event }) => {
        console.log(event)
      },
      consoleLogValueAgain: ({ context }) => {
        console.log('context value 2: ', context)
      },
      updateUsers: assign(({ event: e }) => {
        const event = e as ClientEventOf<'users update'>
        return {
          users: event.users,
        }
      }),
      sendEmoji: ({ event: e }) => {
        const event = e as ClientEventOf<'user sends emoji'>
        send({ type: 'send emoji', emoji: event.emoji })
      },
      showEmoji: ({ event: e }) => {
        const event = e as ClientEventOf<'show emoji'>
        actions.showEmoji({ userId: event.userId, emoji: event.emoji })
      },
    },
    actors: {
      loadParticipants: fromPromise(async () => {
        return ['a', 'b']
      }),
    },
    guards: {
      isHost: ({ context }) => context.hostUserId === context.userId,
      isPlayer: ({ context }) => context.hostUserId !== context.userId,
      // TODO
      gameNotStarted: () => true,
      // TODO
      gameFinished: () => false,
    },
  })