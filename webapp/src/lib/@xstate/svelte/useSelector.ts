import { readable } from 'svelte/store'
import type { ActorRef, SnapshotFrom, Subscription } from 'xstate'

const defaultCompare = <T>(a: T, b: T) => a === b

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useSelector = <TActor extends ActorRef<any, any>, T>(
  actor: TActor,
  selector: (snapshot: SnapshotFrom<TActor>) => T,
  compare: (a: T, b: T) => boolean = defaultCompare,
) => {
  let sub: Subscription

  let prevSelected = selector(actor.getSnapshot())

  const selected = readable(prevSelected, (set) => {
    sub = actor.subscribe((state) => {
      const nextSelected = selector(state)
      if (!compare(prevSelected, nextSelected)) {
        prevSelected = nextSelected
        set(nextSelected)
      }
    })

    return () => {
      sub.unsubscribe()
    }
  })

  return selected
}
