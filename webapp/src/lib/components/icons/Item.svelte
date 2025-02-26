<script lang="ts">
  import { useSelector } from '$lib/@xstate/svelte'
  import { getGameContext } from '$lib/client/game-context'
  import type { AttackItemId, DefenseItemId } from '$lib/game/constants/items'
  import { GameState } from '$lib/game/game-state'
  import type { Side } from '$lib/game/types'

  export let highlightOnHover = false
  export let itemId: AttackItemId | DefenseItemId
  export let showIfOwned: undefined | Side = undefined

  const { highlightedFields, machine } = getGameContext()

  const getOwnedStore = (itemId: AttackItemId | DefenseItemId, showIfOwned: undefined | Side) => {
    return showIfOwned
      ? useSelector(machine.service, (state) => {
          const gameState = GameState.fromContext(state.context)
          const inventory =
            showIfOwned === 'attack' ? gameState.attackInventory : gameState.defenseInventory
          return inventory[itemId as keyof typeof inventory]
        })
      : undefined
  }

  $: owned = getOwnedStore(itemId, showIfOwned)

  const highlight = (highlight = false) => {
    if (!highlightOnHover) return
    highlightedFields.update((fields) => ({
      ...fields,
      items: highlight ? [itemId] : undefined,
    }))
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svg
  viewBox="0 0 40 40"
  width="40"
  height="40"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:mouseenter={() => highlight(true)}
  on:mouseleave={() => highlight(false)}
>
  {#if itemId === 'certificate'}
    <path
      d="M24 29.6h-7.8a412.3 412.3 0 0 1-14-.3c-.2 0-.2-.2-.2-.3.2-1.8.5-6.1.4-8l-.1-10.5V9.2c0-.2.2-.4.4-.4 0 0 0 0 0 0h2l14.5.2c5.6 0 11-.5 16.4-.9L37 8l.3.1.2.3V18a160.1 160.1 0 0 0 .5 11l-.3.2c-2.6 0-7.6.3-7.6.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.1 26v6.5c.8-.6 2-1.4 3-1.3.8 0 1.8.7 2.7 1.3l.2-6.9m-5.7-1.2-.4-.2v-.4c0-.3.2-.7.4-1l.2-.3c0-.3.2-.5.3-.7l-.4-.3-.9-.7a.4.4 0 0 1-.2-.4c0-.2.2-.3.4-.4l2.1-.4a16 16 0 0 1 1.5-2c.2 0 .5 0 .6.3.3.4.5 1 .7 1.5a14.2 14.2 0 0 1 2 0c.3 0 .4.3.4.5s0 .3-.2.4a137.7 137.7 0 0 1-1.6 1.3 102 102 0 0 1 .5 2.2l-.4.2a6 6 0 0 1-2.6-1l-1.2.9s-.9.5-1.2.5Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.6 26.6c-1.9 0-3.5-.8-4.5-2.3A5 5 0 0 1 22 19a7.4 7.4 0 0 1 6.2-3.6c1.3 0 2.5.4 3.5 1.2 1.2 1 2 2.9 1.7 4.3a7 7 0 0 1-6.7 5.7v0Zm-22-12c0-.7-.2-2 0-2.8 0-.2.1-.3.3-.4h2.6m24.5-.7h2.5c.2 0 .3.1.3.3v.2l.2 2M8 27.4a46.4 46.4 0 0 1-2.7-.1.4.4 0 0 1-.3-.4v-.5L4.9 25m30.6-.1.3 1.6a45.1 45.1 0 0 0 0 .6l-.3.2h-2.1M10 13.8h5.6l7-.1M9.1 17.4h4a30 30 0 0 1 6 0m-8.3 7.2H14l2.6-.2M9 21s0 0 0 0h8.5m11.3 6.5v2.7"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'insurance'}
    <path
      d="M19.7 3s7 4.5 13.6 4.2l.9 10.9S35.7 32.6 20.5 37c0 0-13-2.3-14.2-17.7L6 8.3s7-.6 13.7-5.3Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.7 3s2 15.8.8 34"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.4 20.6s21-.6 27.8-2.5m-13-14.2-1 2.5m2.5-1.8-2.2 6.7m4.3-5.8-4.1 10m.3 3.1 5.5-12.4m1.2.3-5.2 13.2m6.3-12.9-4 12.7m1.6-.2 4.4-12.2m1.5.1-3.7 11.9m4.9-9L30.2 19m3.6-5.4-1.5 5M19.4 20l-7.5 12.3m9-9.3-7.5 10.6m7.6-8.3-6 9.5m1.9.9 4-7.4m-.2 3.7L18 36.2m2.7-1.4-1.3 1.9M17.2 20l-6.7 10.7m-1.3-1.9 4.6-8.5m-1.9.1-4 6m-.6-1.7 2.6-4.2m-1.9 0-1.3 2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'security-camera'}
    <path
      d="M17.1 24.8c0-.9-.8-1.5-2-1.6-1.2 0-2 .7-2 1.7s.9 1.8 2 1.8c1.2 0 2-.7 2-1.9Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.4 26.7s6.3-.5 8.5-.4m-8.5 4.6 8 .3s1.5.2 2-1.4c.6-1.6.3-3.1.3-3.1m1.1-8.6 12.5 1.5s1.7.1 2.7-.8l4.5-4.7s1.2-.8 0-1.1c-1.2-.3-18.3-2.3-23.8-3.2 0 0-1.5-.5-1.8 1.5l-.5 4.5s-.2 1.5 1 1.7l2.4.4M2 23.7v10.6h2s.9 0 1.2-1.4c.4-1.3 0-8 0-8s0-1-1-1.2c-1.2-.2-2.1 0-2.1 0Zm6.4-12.1s-.6-4 4.3-4.2m-6.9 4.2S4.6 4.7 12.7 5"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.4 17.5s-.6 2.3.9 2.6l19.5 2.6s2.5.7 2.9-1.4l1-6.5m-21.5 8.6-.3-3m2.9 3.5v-3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.2 16.5s-2.6 2.7-1 6m1-8.5-9.4-1.3m-1.8-.3-4.3-.5m-6 6.6s-.2.7 1.2.8l4.2.5"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'alarm-system'}
    <path
      d="M25.1 24s0 0 0 0l-.2-.1v-.4c.2 0 .4 0 .4.2 0 .1 0 .2-.2.2Z"
      fill="currentColor"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.3 31.8H13.2a1 1 0 0 1-1.1-1l.3-14.7s0-3 4.6-3.9c4.6-.8 8-.3 8-.3s2.2.3 2.3 2.5c0 2 .8 13.3.9 16.5 0 .5-.4.9-.9.9v0Zm-2.3-10v-5.3M5 12.2l3.5 2m5.1-9.3L15.3 8m8-1.1.2-3.9m6.7 5.4 2.3-1.7M32 17.4l2.1-.6"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.2 31.2s-.4 0-1 1.2l-1.4 2.5s-.6.6.4.6a96.1 96.1 0 0 0 20.7.2c.2-.1.3-.3.3-.5a9.7 9.7 0 0 0-3-4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.3 31.8s1.2 2 1.8 4m-2.7-4s.3 2.5.9 4m-2.7-4s.6 3.7.5 4.2m-1.7-4.2v4m-1.4-4-.4 4m-1.1-4-.2 2.5"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'lock'}
    <g
      clip-path="url(#a3)"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M30.3 34.8c-.1-2.9-.3-13-.5-14.7-.1-2-3.2-2.3-3.2-2.3s-4.7-.4-11.3.3c-6.5.8-6.5 3.5-6.5 3.5v13s-.4 2.2 2 2.3c2.5 0 14.6.3 16.7-.2 2.2-.6 2.8-1.3 2.8-1.9h0Z"
      />
      <path
        d="M22.5 23.9a3 3 0 0 0-3.1-3.2c-1.9 0-3.1 1.2-3.2 3.3 0 1.1.6 2 1.8 2.5-.2 1.2-.5 3.4-.9 4.8-.5 1.8 1.1 1.7 2.1 1.8 1.6 0 2.7.1 2.7-1.7 0-1.2-.6-3.6-1-5 1-.4 1.6-1.3 1.6-2.5v0Zm4.1-6.1c.1-4.5-.3-8.2-.3-8.2A7.2 7.2 0 0 0 19.5 3c-3.3-.3-6 1.8-7.1 5.2 0 0-1 3-1 10.8"
      />
      <path
        d="M23.9 17.4c.2-4.2 0-7.1 0-7.1-.3-2.4-2-4-4.6-4.3-2.3-.2-4 1.3-4.7 3.6 0 0-1 2.2-.5 8.4m13.6 1.4s.6.2.6 1.9m0 1 .4 10M18 4s2.3-.1 3.9 1m1.5 1.2a5 5 0 0 0 1.5 3m.2 1.3.1 2m-5.8 8.2L16.2 24m.4 1.5s3.3-3.7 3.6-4.7m-2.4 5.4 4-4.3m-4 5.8 4.6-4.5M21 26.5l-3.5 3m3.8-1.8L17 31.6m.3 1s3.5-2.5 4.3-3.3M19.2 33s2-1.7 2.6-2"
      />
    </g>
    <defs>
      <clipPath id="a3">
        <path fill="#fff" transform="translate(8 2)" d="M0 0h23v36H0z" />
      </clipPath>
    </defs>
  {:else if itemId === 'gps-tracker'}
    <path
      d="m23.6 31.7 3.6.8c1.7.6 2.8 1.6 2.3 2.3-.8 1.2-3.3 2-6.8 2.2H19a19 19 0 0 1-6.7-1.7c-1.7-1-1.7-2-.2-2.7 1-.4 2.6-.8 4.4-1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M28.7 11.2A8.8 8.8 0 0 0 20.5 3c-4-.3-7.3 2.2-8.5 6.5a16 16 0 0 0-.6 4.8c0 7.2 3.4 13 7.4 18.6 1.4 2 2.4 1.7 3.6-.3 2.5-4.4 4.4-9 5.7-14 .6-2.4.8-4.8.6-7.3h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 8.1c-2.2 0-3.7 1.8-3.8 4.9-.1 2.8 1.5 4.7 3.9 4.7s4.2-2 4.3-4.8c.1-2.7-1.6-4.6-4.4-4.8Zm6 25.3c1.4.4 2.2 1 1.9 1.4-.7.7-2.5 1-5.2 1.1M18 4.5s3.3-1.2 6.4 1.5m1.1 1.1s1.2 1.2 1.5 3.4M15.6 16s.3 1.6 2.4 2.6m1.2.4s1.4.4 2.4-.4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'license'}
    <path
      d="m13.2 3.3-6.7.2c-.3 0-.5.2-.5.5 0 1 .2 3.4.1 4v14.7l.5 12.7.1 2.2c0 .2.3.4.5.4h5.5c4 0 7.9-.1 11.8-.3l5.3-.2c.3 0 .5-.2.5-.4v-4.2m-.5-11.6-.2-8-.2-7.5V3.4c0-.3-.3-.5-.5-.5l-6.4.2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5 26.7c.2-3.2-2.3-5.4-6.2-5.5-3.5-.2-6 2.1-6 5.6 0 3.4 2.6 6.2 6 6.3 3.6.1 6-2.4 6.2-6.4v0ZM13.8 2.1c-.2 0-.3 0-.4.4-.1.3 0 3 0 3.2 0 .9 1.1.7 1.4.7.3 0 4.6-.2 6.6 0 .7 0 1-.1.9-.6V2.3c0-.5-8.1-.2-8.5-.2h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M27.3 21.2V5.8c0-.3-.2-.4-.5-.5h-3.5l-1 .1m-9 0-5 .1h-.1v.1l.2 8.6c.2 7 1 19.7 1 20.1.1.5.2.7.6.8l8.7-.1 2.2-.2 6.1-.4h.3c.1 0 .2 0 .2-.2V34l.1-.5v-.4m-2.1-6.3 1.4 2.8s.3.8.9 0l3.6-5.3m-20.7-14 10.5-.3m-10.5 5.4h10.1m-9.7 4.8 9.7-.4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m22.5 9.2.7 1.4s.1.4.4 0L25.4 8m-3.2 6.3.7 1.4s.2.4.4 0l1.8-2.6m-2.9 6.3.7 1.4s.2.4.4 0l1.8-2.6M14.4 5h4m1.2 0H21"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'encrypted-data'}
    <path
      d="M34.6 16v-6l-.2-.3-.3-.1-1.4.1c-4.8.5-9.3.1-14.4.1 0 0-1 .2-1.4-.8-.2-.5-.7-1.7-1.6-1.8-1 0-9.5-.6-11.4 0 0 0-1.6.4-1.6 1.4v14.5c.1 1.9-.1 6.5-.3 8.4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m2 31.6.1.2.3.1a451.9 451.9 0 0 0 32.5-.5c-.1-1.2 2.3-13.1 2-14.8v-.3h-.3L20.8 16s-12.6-.1-14.4.1c0 0-1.5 0-1.7 1L2 31.6h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 16.7C4.8 16 5 14 5 14h3.1l10.7.3 13.5-.3s-.2 1.7 0 2.2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m3.7 22.7-.2-8.2v-2.2h3l10.7.2 13.5-.2s0 1 .2 1.7M14 9s0 0 0 0l-.1.2h-.2c-.1.1-.3 0-.4 0 0-.2.1-.4.3-.4.1 0 .3 0 .3.2h0Zm-2.9 0H4.6M23 29.5l.1-5c0-.8-1-1-1-1h-3.8c-2.2.1-2.3 1-2.3 1l-.2 4.5s-.2.7.6.8c.8 0 4.9.4 5.6.3.7-.2 1-.4 1-.6Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20.6 25.6a1 1 0 0 0-1-1.2c-.6 0-1 .4-1.1 1 0 .5.1.8.5 1l-.3 1.6c-.3.6.3.6.6.7.5 0 1 0 1-.5l-.3-1.8c.4 0 .6-.4.6-.8h0Zm1.4-2c.2-1.6.1-2.8.1-2.8 0-1.3-.9-2.2-2.1-2.4-1-.2-2 .5-2.5 1.6 0 0-.4 1-.5 3.7"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21 23.2v-2.1c0-.8-.4-1.3-1.1-1.4-.7 0-1.2.3-1.4 1 0 0-.3.7-.3 2.5M4.2 28l-.5 2.2s-.3.5.2.5h3m1.7 0 3.6.2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'extinguisher'}
    <path
      d="M21.6 14.7a3.7 3.7 0 0 0-2.8-2.4M21.7 25v-8.2m-.2 14.7V27m6.4-5.7-1.4-5.1m2.3 8.6-.5-2.1m-2.5-7.5-.5.4s0 0 0 0 0 0 0 0 0 0 0 0v.1s0 0 0 0 0 0 0 0l2.3 11s0 0 0 0l.1.2a3.6 3.6 0 0 0 1.6.1c.5 0 1.4-.4 1.7-.6.3-.2 1-.8 1-1.2l-.6-1.6s0 0 0 0 0 0 0 0l-3.8-8.5s0 0 0 0V15a2 2 0 0 0-.7-.2c-.9.1-1.2.4-1.2.4h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14 11.2s0 0 0 0c-1.3.7-2 2-2 2.9 0 0 0 0 0 0s0 0 0 0l-.7 22.4s0 0 0 0 0 0 0 0v.1s0 0 0 0c.5 1.2 3.3 1.6 6 1.6a12 12 0 0 0 4.7-.8c.9-.4 1.6-1 1.6-1.5v-.1l-.3-21.5c0-1.3-1-2.5-2.3-3.2 0 0 0 0 0 0a8.3 8.3 0 0 0-7 0h0Zm1.6-5.6v-.9c0-.2-.2-.2-.3-.3 0 0-5-1.2-8.1-1.7-.2 0-.3-.4 0-.4a19.7 19.7 0 0 1 8.9.5c1.5.5 2.2 1 3 1.7l.2.8.2 1.2m-.1.8v-.8l-3.8-.8h-3.5c-1 0-2.1.1-3 .4l-1.4.6c-.5.2-.2 1 .3.8 1.7-.5 3.4-.7 5.1-.6.9 0 1.6.2 2.3.4.7.2 1 .9 1.2 1.5"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.8 10.5c.5-.6.8-1.2.8-1.7h2.8c0 .5.3 1.4.6 2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.7 15c-.7-2-.7-2.7-1.5-4-.5-.7-4.7-2.4-5.4-2.8a.5.5 0 0 1-.3-.6s.2-.4.6-.2c0 0 5.3 1.9 6 3.1.9 1.3 1.3 2.2 1.9 4.2M12 17s1.4 1 3.5.7m-3.8 4.9s1.7 1.2 3.8.9M11.7 28a6 6 0 0 0 4 1m-4.3 4.5s2.1 1.7 4.7 1.4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'firewall'}
    <path
      d="M2.5 5.2c-.2 0-.3 0-.4.3v3.4c-.1 1 1.2.7 1.5.7h7c.8 0 1 0 1-.6V5.3c0-.5-8.7-.2-9-.1Zm19.7 4.3c.2 0 .4 0 .5-.3V5.7c0-.9-1.2-.7-1.6-.7-.2 0-4.8.2-6.9 0-.8 0-1 .1-1 .6v3.7c0 .6 8.7.3 9 .2Zm2.5-4.3c-.2 0-.4 0-.5.3v3.4c0 1 1.2.7 1.6.7h6.9c.8 0 1 0 1-.6V5.3c0-.5-8.6-.2-9-.1Zm11.5 10c.2 0 .3 0 .4-.3.2-.4.1-3.2.1-3.4 0-1-1.3-.7-1.6-.7h-7c-.7 0-1 0-.9.6v2.1c0 .5-.1 1.1 0 1.6 0 .5 8.6.2 9 .1ZM16.6 11c-.2 0-.3 0-.4.2v3.5c-.1.9 1.2.7 1.5.7.3 0 4.8-.2 7 0 .8 0 1-.1 1-.6v-3.7c0-.6-8.7-.2-9-.2ZM14 15.2c.2 0 .4 0 .5-.3v-3.4c0-1-1.2-.7-1.5-.7H6c-.8 0-1 0-1 .6V15c0 .5 8.7.2 9 .1ZM2.6 16.8c-.2 0-.3.1-.4.4-.2.4-.1 3.2-.1 3.4 0 1 1.3.7 1.6.7h7c.7 0 1 0 .9-.6v-2.1c0-.5.1-1.1 0-1.6 0-.6-8.6-.2-9-.2Zm19.7 4.4c.2 0 .3 0 .4-.3.2-.4.1-3.3.1-3.5 0-.9-1.3-.7-1.6-.7h-7c-.7 0-1 .1-.9.6v2.1c0 .5-.1 1.2 0 1.6 0 .6 8.6.2 9 .2Zm11.5-2.1v-2c0-.7-8.7-.3-9-.3-.3 0-.4.1-.5.4v3.4m-.4 1.7a67 67 0 0 0-7.8.1c-.2 0-.3 0-.4.3v3.5c0 .9 1.2.7 1.5.7.3 0 4.3-.2 6.4 0m-10-.2c.1 0 .3 0 .4-.3V23c0-1-1.2-.7-1.5-.7h-7c-.8 0-1 0-1 .5v3.8c0 .5 8.7.2 9 .1Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.3 18.5s-3.2 2.2-6.1 2.1l-.3 5s-1 6.4 6.4 8.4c0 0 5.9-1.5 6.3-7.5v-4.8s-4.1-.6-6.3-3.2v0ZM2.6 28.2c-.2 0-.3 0-.4.3C2 29 2 31.7 2 32c0 .9 1.3.7 1.6.7.2 0 4.8-.2 7 0 .7 0 1-.1.9-.6v-3.7c0-.6-8.6-.3-9-.2Zm19.7 4.3c.2 0 .3 0 .4-.3.2-.4.1-3.2.1-3.4 0-1-1.3-.7-1.6-.7h-7c-.7 0-1 0-.9.5v2.2c0 .4-.1 1.1 0 1.6 0 .5 8.6.2 9 .1Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.3 28.5V32c0 .9 1.2.7 1.5.7h1m8.7-6.7c.1-2.3-1.6-3.8-4.3-4-2.5 0-4.3 1.6-4.3 4 0 2.5 1.9 4.4 4.3 4.5 2.5 0 4.2-1.7 4.3-4.5Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m29.2 26 1 2s.2.6.6 0l2.5-3.7M6.8 5.9l3.4.1m8 0h1.5M21 6h.8m-12 6h1.5m1.2 0h.9M18 29.3h1.5m1.1 0h1m9-23.4h2.2M17.3 17.7l4.4.2m-.6 5.5 2.3.2M13 23.2h-1.4m-1.4 0H8.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'fake-identity-card'}
    <path
      d="M15.4 7.2H9s0 0 0 0l.3 9c.2 7.2 1.1 20.5 1.2 21 0 .5.1.6.6.8l9.6-.2h2.4l6.8-.6h.4l.2-.1v-.3l.1-.5a190 190 0 0 0-.3-8.6l-.2-2.3-.2-4.3-1-13.6c0-.3-.1-.4-.5-.5h-3.9l-5.6.2h-1.7m-.2 2c-.4.6-.4 1.7.4 2.4 1 .8 2.3.7 3.1-.2.4-.5.5-1 .5-1.6a2 2 0 0 0-.4-1c-.2-.1-.4-.5-1.5-.7-.5 0-.9 0-1.2.2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19.5 13.7h1.7c.4.1.5.3.6.7a194.9 194.9 0 0 0 .5 8.9c0 .3-.3.5-.6.5h-.5l-2.4.3h-1.5c-.6 0-3.4.2-4.3.1h-1c-.4-.1-.6-.4-.7-.9v-.5l-.5-8.1c0-.3.2-.6.5-.6l8.2-.3v0ZM12 28l15.7-.8m-15.3 5 15.7-1.1M23.9 15h3.9M24 18.2h3.7M24 21.9l3.8-.1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.1 24.2c.1-1.3.8-2.5 2-3.1l-.4-.7c-.2-.5-.4-1-.4-1.6a4 4 0 0 1 0-1.6c.2-.5.4-.9.8-1.2a2.3 2.3 0 0 1 3 .4c.6.6.8 1.4.8 2.3 0 .8-.2 1.6-.4 2.3v.1l.4.2c.5.2 1 .6 1.2 1.2l.2.8v.6l-3.7.2-3.5.1Z"
      fill="currentColor"
    />
    <path
      d="m20.5 6.9 3-4.9M13 2l5.5 7c.2.3.5.3.7 0l.5-.8M21.8 7 25 2.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m11.4 2 6.4 8c.5.6 1.6.6 2-.1l.8-1.1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'usb-stick'}
    <path
      d="M9.4 7.5v.1l.4 1c.1.3.4 0 .5 0l1.6-.8c.2 0 .2-.1.1-.2l-.3-.7-.2-.4c0-.2-2 .9-2.1 1h0Zm4.4-2.1v.2l.5 1c0 .3.3 0 .4 0l1.6-.8c.2 0 .2-.1.2-.2l-.3-.7-.2-.4c-.1-.2-2 .9-2.2 1h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.5 13.8 6 7.1 16.9 2l3.4 6.5M8.8 14.2l12.1-5.8c.6-.3 1.3 0 1.6.5l10.3 20.9c.4.8.1 1.8-.7 2.2l-10.3 5.6c-.6.3-1.4 0-1.8-.6L8.3 15.5a1 1 0 0 1 .5-1.3ZM7.7 7.8l2.1 3.7"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m11.5 14.6-1 .5s-.3.2 0 .8l1 2.2m.9 1.5 3.8 7m1.5 2.6s1.6 3.5 2 4"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'blueprint'}
    <path
      d="M4.5 35.3a2 2 0 0 1 0-3.4c1.8-1.2 3.5.3 3.5.3.3-3.5 1-27.9 1-27.9C7.6 3 5.5 3 5.5 3S2.3 3 2 4.3c0 1.4 0 24.7.3 30 0 0 0 3 4.8 3l14.5-.6 12.7-.3h2.2c.2-.2.4-.4.4-.7v-6a309.8 309.8 0 0 0-.6-22h-4.2L9 8.6"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.4 14.7v-2.3c0-.5-.4-.8-1.6-.7H13.1c-.9 0-1 .4-1 2 0 1.5.3 16.1 0 18.4 0 .6 0 1 1 1 .9 0 16.1-.2 18.5-.1 1.8 0 1.8-1 1.8-1V18"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m12.4 21.6 6.7-.2s1 0 1-.5v-1.5m-.1-2.9.2-4.8m6.6 0a47.5 47.5 0 0 0-.2 7.3m0 2.8 6.8.3m-21.2 4.4 2.7.1m2.5 0h9.2m3.7 0h3m-9.7.1L24 33M4.9 4.5s.8-.2 1.9.2c.8.2.7.4.7.4l-.1 2.7m-.1 2.4-.6 15.4m7.7-1.8h5.4m-.6-1.3s1 .8 1 1.3-1 1.1-1 1.1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'cloud'}
    <path
      d="M27 15.5c.3 0 .5 0 .7-.3.2-.4.1-3 .1-3.2 0-.9-2-.7-2.5-.7-.4 0-7.4.2-10.7 0-1.3 0-1.6.1-1.5.6l-.1 2v1.5c0 .5 13.4.2 14 .1h0ZM13.7 17c-.3.1-.5.1-.6.4-.2.4-.1 3-.2 3.2 0 .9 2 .7 2.5.7h10.8c1.2 0 1.5-.1 1.5-.6v-2c0-.4.2-1 .1-1.5 0-.5-13.5-.2-14-.1h0ZM27 26.5c.3 0 .5 0 .7-.3.2-.3.1-3 .1-3.2 0-.9-2-.7-2.5-.6H14.6c-1.3 0-1.6 0-1.5.5l-.1 2v1.5c0 .5 13.4.2 14 .1h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.8 21.4s-1.3.3-3.1.1C8 21.5 3 21.4 3 16s3.1-7.5 6.7-7.4c0 0 1.7-7.8 10-6.3 8.4 1.5 10.3 8 10.3 8s4-.8 6.4 1.7c2.4 2.5 2 9.1-3.7 9.9 0 0-2 .3-3.8-.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.5 13.7s0 0 0 0v.2H23c0-.2 0-.4.2-.4.1 0 .2 0 .3.2Zm-2.4 0h-5.5m10.1 0s0 0 0 0v.2h-.5c0-.2 0-.4.2-.4.1 0 .3 0 .3.2ZM23.5 19v.4h-.2c-.1.1-.3 0-.3-.1s0-.3.2-.3c.1 0 .2 0 .3.2Zm-2.4 0-5.7.1m10.3-.1v.4h-.2c-.1.1-.3 0-.3-.1s0-.3.2-.3c.1 0 .3 0 .3.2Zm-2.2 5.5s0 0 0 0v.2h-.2c-.1.1-.3 0-.3-.1 0-.2 0-.3.2-.3.1 0 .2 0 .3.2Zm-2.4 0h-5.4m10 0s0 0 0 0v.2h-.2c-.1.1-.3 0-.3-.1 0-.2 0-.3.2-.3.1 0 .3 0 .3.2ZM22 35.1c0-.9-.7-1.5-1.8-1.6-1 0-1.7.7-1.7 1.7s.7 1.8 1.7 1.8 1.8-.7 1.8-1.9h0Zm9.8-1.9c0-.9-.6-1.5-1.8-1.6-1 0-1.7.6-1.7 1.6S29 35 30 35.1c1 0 1.8-.7 1.8-1.9h0Zm-11.6-6.5v6.8m3.3-6.8-.1 2.3 5.6-.2.7 2.8m-13.4-4.9-.4 4.7-5 .2-.4 1.1m1.7 1.8c0-1-.7-1.6-1.8-1.6-1 0-1.8.6-1.8 1.6s.8 1.8 1.8 1.8 1.7-.7 1.8-1.8h0ZM11.9 7s-.7 1.2-1 3.1c0 0-3-.8-4.9 1.7m-1 1.7s-.7 1.8-.2 3.7m7.7-11.3s.5-1 1.2-1.3m7.6-.5s2.8 1 3.9 2.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'virus'}
    <path
      d="m35.7 28.4.5-10.7V7.6l-.2-.2-.2-.1-.5-.1a172.4 172.4 0 0 0-8.8-.2H20l-13.7.3c-.4 0-.5.1-.6.5L5.5 9l-1 19.4M35 32.2c.7 0 1.5 0 1.9-.2.5-.3 1-2.6 1.1-2.8 0-.7-4.8-.6-6-.6H5.7c-3.1 0-3.7.1-3.7.5 0 1 0 1.4.3 2 .2.4 1 1 1.7 1 .6 0 29.5.2 31 .1v0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m6.2 28.4.5-18.8s0-.7 1-.8C9 8.7 30 8.3 32 8.4c2 0 2.6-.1 2.7 1 .2 5.3-.4 19-.4 19M15 29.5s-.1.6.5.6 7.8.3 8.8 0c0 0 .5-.1.6-.6m-21.8.3s6.6-.3 10.4-.2m12.5 0s9-.3 10.6 0"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.2 21.5s-3.6-3.4-.2-6c3.5-2.6 6.4.8 6.4.8s1.8 2.3-1 5.4v1s0 1-1.2 1c-1 0-2.4.2-2.9 0-.5-.1-.8-.4-.7-1 0-.8-.4-1.2-.4-1.2h0Zm1.4.7v1.6m1.4-1.6v1.4m1.2-1.2v1.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3 17.4s.5 0 1.7 1c.5.4 0 .9-.3 1-.3.2-1.2.1-1.6-.4-.4-.5-.5-1.5.2-1.5v0Zm5.1 0s-.5 0-1.6 1c-.6.4 0 .9.3 1 .3.2 1.1.1 1.5-.4.4-.5.5-1.5-.2-1.5v0Zm-10.3-4.2c0-.8-.6-1.4-1.6-1.4s-1.6.6-1.6 1.5.7 1.6 1.6 1.6c1 0 1.6-.6 1.6-1.7Zm-.9 10.3c0-.8-.6-1.4-1.6-1.4S9 22.6 9 23.5c0 1 .6 1.7 1.6 1.7.9 0 1.5-.6 1.6-1.7Zm4.4-5.8-5 .4v-3.2m20-.9c0-.7-.6-1.3-1.6-1.3s-1.6.5-1.6 1.4c0 1 .7 1.6 1.6 1.7 1 0 1.6-.7 1.6-1.7ZM25 17.4l5.4-.2-.4-1.4m-12.8 4.4-5.7.2L11 22m13.4-1.6 5.1.1v2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.8 23.8c0-.8-.6-1.4-1.6-1.4-.9 0-1.5.6-1.6 1.5 0 .9.7 1.6 1.6 1.6 1 0 1.6-.6 1.6-1.7ZM9.2 9.9s-1.1-.1-1.3.3c-.2.3 0 3.4 0 3.4m-.1 2.1v5.7M23.3 9.7l5 .1m1.7-.1 2.6-.1s.5-.1.6.9"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'tools'}
    <path
      d="M9.7 23.7 9 7.3s1.5-.4 1.2-2.4L10 3.5s-.2-1.2-.5-1.2L7.7 2s-.4 0-.6.7l-.6 1.8s-.8 2.1 1 2.7l-.1 16.5m1 .3-2.5-.1s-.6 0-.6 1.4c0 0 0 .6.6.7 0 0-.5 0-.6.7L5 35.9s-.1 1 .8 1c1.1.1 3.7.5 4.4.4 0 0 1.4 0 1.4-1.4l-.4-9.1s0-.8-.8-.8c0 0 1.2-.1 1.2-.5 0 0 0-1.1-.2-1.4-.2-.3-1.7 0-3-.1h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.8 26s3.4.2 4.7 0m-3.8.1L6 37m1.7-11 .1 11M9 26.2V37m1-10.8.5 10.8m12-34.2s2.4-.5 2 .3l-.9.9c-.3.4-.8 1.2.3 2.3 0 0 .5.5 1.6.6 1.1.1 2.5.7 2.8 3.3v1.5c0 .5-.5 2.1.8 3.2 0 0-2 .3-3.3.3 0 0-.5-2-1-2.3-.4-.2-3.2-1.4-2.4-4.7 0 0 .2-.7-.7-1-.3 0-1-.5-1.2-1.3-.4-1.9.4-2.7 2-3.1h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25.8 15.2s2.6 4.8 3.3 6.7a25 25 0 0 1 1 8c0 3.2-1.1 7 2 7.7 3.2.7 2.9-2.5 2.9-2.5s-.5-3.4-.5-4.3c0-.8-.4-8-1.4-10-.9-2-2.6-4.3-4-5.9m-1.1-6s0-1.1 1.1-1.4c.3-.1 1.1-.5 1.3-1.3.4-1.9-.3-2.7-1.9-3.2 0 0-2.4-.6-2 .2l.8.9c.4.4.8 1.3-.4 2.3 0 0-.3.4-1.1.5m-3.4 3.7v1.5c0 .5 0 1.7-1.3 2.8 0 0 2 .3 3.3.3 0 0 .6-1.1 1-1.5"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24.4 15.2s-2.2 4.4-2.8 6.6c-.7 2.7-.7 4-.8 7.2 0 3.2.9 7.2-2.3 7.7-3.2.5-2.8-2.6-2.8-2.6l.7-4.2c0-.9.9-7.2 1.6-9.3 1.2-3.2 1.6-4.2 3-5.7"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.1 18s2.2 1.6 4.2 0m-4.9 1.6s4 1.7 5.5-.4m2.1-1.6s2.2 2.7 2.5 5m.3 1.6.3 3.2M31.8 36s2.2.6 2.1-1M22.2 17.1s-1.9 3-2.1 6.9M18 35.3s1.6 0 1.6-1.9"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'gun'}
    <path
      d="m9.6 15.9-.3.1v1.3c0 .3.7.2.9.2a101.3 101.3 0 0 1 4.6-.2v-1.4c0-.2-5 0-5.2 0h0ZM33 9.2l.7-1s.6-.7 1 .2c.3 1 .6 1 .6 1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M37.8 14.4s1-.7 1-2.5c.2-1.9.4-2-.5-2.4-.8-.3-32-.6-32-.6s-2.2-.2-2.4 2l-.2 1.9S3.3 15 5 15.2c1.8.2 1.9 1.2 2 1.9 0 1.7-.4 2.8-.4 2.8s-1.5 3.9-4.6 8c0 0-2.4 2.4.3 3.5 2.9 1 10.9.9 10.9.9s1.1 0 1.4-2.6c.2-2.7.8-7.9 2-10.2 1-2.3 1.2-3.7 5.9-4 4.7-.3 14 0 15.3-1h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.7 12.8s25 .6 35-.2m-21 4.6s.4 2.6 3 2.8c2.2.1 2.1-.4 1.6-1-.5-.5-2.5-1-1.3-3.3"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.5 19.5s1 2.3 4.7 2.3c3.8 0 3.4-2.3 3.4-2.3s-.6-2.8 0-4.1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.7 22s3.6 2.3 7.2 1c3.6-1.2 2.8-3.7 2.8-3.7s-.5-1.9-.2-3.6M5.2 11.5l4.3.2m1.5 0h2.8M5.8 25s-1.1 2.7-2.1 3.6c-1 1-.9 1.7.4 2m1.7.2 2.7.2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'binoculars'}
    <path
      d="M38 30c.2-2.4-2.6-4.1-7-4.2-4-.1-6.9 1.7-6.9 4.4s3 4.8 7 4.9c4 .1 6.7-1.9 6.9-5v0Zm-22.4 0c.1-2.4-2.6-4.1-6.9-4.2-4-.1-6.7 1.7-6.7 4.4S4.9 35 8.7 35c4 .1 6.7-1.9 6.9-5v0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m16.7 14.8.3-5s.3-3.3-2.4-4c-6.4-1.8-7 2-7 2L2 29.4m13.6.6.7-10.3m4.7-5-1-5s-1-3.4 2.7-4.3c3.2-.8 4.7-.6 6.7 2.6s8.4 21 8.4 21m-13.6 1.7-2.3-11"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.7 15.3c1-.5 3.4-1.3 6.5-.2.4 0 .7.4.8.9l.7 3.9s-7.3-1.7-9.1.5l.3-4c0-.5.3-.9.8-1h0Zm-12 8.5s9.2-4.4 12 1.8m7.5.4s2.6-7 12.6-2.6m-32 7.3c0 1.8 2 3 5 3.1 3 .1 5-1.2 5-3.2s-2.2-3.5-5-3.6c-2.8 0-4.8 1.4-5 3.7h0Zm22.2 0c-.1 1.8 2 3 5.1 3.1 3 .1 5-1.2 5-3.2s-2.1-3.5-5-3.6c-3 0-5 1.4-5 3.7v0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M34.5 29.8s1 1.9-1.1 2.5m-1.4.4s-2.1 0-3.3-.4m-17-3.3s1.2 1 .5 2.4m-.5.9s-1.3.7-3 .4m15-11.9.4 2M22 13.5 21 10m-5.4 4 .1-2.7m-1.1 10.1-.2 1m.3-3.7s4.6-2.2 8.8-.2m-8.6-1.3s4.8-1.7 8.3.3m-8.1-1.7s4.7-1.1 8 .2"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'dynamite'}
    <path
      d="M6.2 28.1c.8.1 1.3-1.4 1.4-3.7 0-2.2-.5-3.8-1.4-3.8-.8 0-1.5 1.6-1.5 3.8 0 2.1.6 3.6 1.5 3.7v0Z"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.3 20.4c1.3 0 2.3 0 3.3.2 0 0 2.7.1 3.3 1.6 0 0 1 2 0 4 0 0-.5 1.7-2.6 2 0 0-19 .3-24 0m7-7.8h10.8m-17.9.2 5-.1M5 19.4c.8 0 1.4-1.5 1.4-3.8 0-2.2-.5-3.8-1.4-3.8-.8 0-1.5 1.6-1.5 3.8 0 2.2.6 3.6 1.6 3.8v0Zm6 .1-6-.1m19 0-10.9.1"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 11.8s16.4-.5 22.9 0c0 0 1.3 0 2 1 .5.6 1.8 3.4 0 6 0 0-.4.5-1.3.6h-2.4M2.6 27c.7.1 1.3-1.4 1.3-3.8 0-2.2-.5-3.7-1.4-3.7-.8 0-1.5 1.6-1.5 3.7 0 2.2.6 3.7 1.6 3.8v0Z"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 27.2c-1.4 0-1.6-.1-2.4-.2m-.1-7.5 2.6-.1m23.2 0s.7.2.7 1.1M9.5 11.7s3.3 11.9 1.4 16.5m.4-16.5s3.4 10.7 2 16.5M23 11.7s2 10.1.6 16.5m1.3-16.5s2.6 10.7 1.1 16.5"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.4 11.8a47 47 0 0 0 2 16.4m11.5-16.5s2 6.6 1 16.5m5.9-12.3s1.3-1 2-.6c.8.4.7 1 .8 1.3.2.8 1.2 1 2.2-.1"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="m34.7 15.7-.6-1.7c0-.5 1.2.5 1.2.5l.4-1.5c0-.3 1 .4.8 1.6l1.6-.2c.2 0-.6 1.3-.6 1.3S38.8 17 39 17c.2 0-2.6-.1-2.7.2m-.7.9 1.1 1c.2.3.2-1.2.2-1.2M7 17.6s-.2.7.3.6h2.4m5.1 0 7.6-.3m4.8.3s1.5.2 2-.6c.5-.9.5-1.5.5-1.5m-21.3 11H10m8.7 0 4-.1m4.4-.2h1.2m1.3 0s1.8.4 2.7-2"
      stroke="currentColor"
      stroke-width=".7"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'data-exchange'}
    <path
      d="M26 10c-.6.1-9 .2-13.2 0-1.5 0-1.9.2-1.8.7l-.1 2.6V15c0 .7 16.7.3 17.4.2m-16.5 2c-.4 0-.7 0-.8.4-.3.5-.2 3.8-.2 4 0 1.1 2.5.9 3.1.8h13.4c1.6.1 1.9 0 1.9-.6v-2.5c0-.6.2-1.4.1-1.9 0-.6-16.8-.2-17.5-.2h0ZM14 29.1c4.8.2 13.8 0 14.3-.1.4 0 .7 0 .9-.4.2-.5.1-3.7.1-4 0-1-2.5-.8-3-.8h-14"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M24 13s0 0 0 0l-.1.3h-.2c-.2.1-.3 0-.4-.1 0-.2 0-.4.3-.4.1 0 .3 0 .3.2h0Zm-3 0h-7m12.7 0s0 0 0 0v.3h-.2c-.2.1-.4 0-.4-.1-.1-.2 0-.4.2-.4s.3 0 .4.2h0ZM24 19.7s0 0 0 0l-.1.3h-.2c-.2.1-.3 0-.4-.1 0-.2 0-.4.3-.4.1 0 .3 0 .3.2h0Zm-3 0h-7.2m12.9 0s0 0 0 0v.3h-.2c-.2.1-.4 0-.4-.1-.1-.2 0-.4.2-.4s.3 0 .4.2h0ZM24 26.4v.1l-.1.2h-.2c-.2.1-.3 0-.4-.1 0-.2 0-.4.3-.4.1 0 .3 0 .3.2h0Zm-3 .1-6.8-.1m12.5 0v.3h-.2c-.2.1-.4 0-.4-.1-.1-.2 0-.4.2-.4s.3 0 .4.2h0Zm8.4-15.9c0-1.3-1-2.2-2.5-2.2-1.4 0-2.4.9-2.4 2.3s1 2.5 2.4 2.5c1.5 0 2.4-1 2.5-2.6h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30.5 6.8s.5-.5 1.1-.6l.3-1h.1l1.2-.2.2.1.2.8s1.2.4 1.5.7l.7-.3.4.1.6.7c.1.1.2.3 0 .5l-.3.6s.4.9.4 1.4l.9.2c.1 0 .3.2.3.4v.7l-.2.3-.9.5s.1.7-.4 1.4l.2.4v.6l-.6.5h-.5l-.3-.1s-.9.5-1.4.5l-.2.6c0 .2-.2.3-.3.3h-1s-.2 0-.2-.2l-.5-.6s-1.2-.3-1.6-.7l-.6.3H29l-.6-.6a.5.5 0 0 1-.1-.5l.4-.8-.4-1.1-1-.2a.4.4 0 0 1-.2-.4v-1l.3-.3.7-.3.6-1.4-.3-.5V7l.8-.8h.5l.7.5h0ZM5 28.3c-.1 1.3.9 2.2 2.4 2.2s2.5-.8 2.5-2.2c0-1.4-1-2.5-2.5-2.6-1.4 0-2.4 1-2.5 2.6h0Z"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.6 32s-.5.5-1.2.6l-.2 1-.2.1-1.2.1-.2-.1-.2-.8s-1.1-.3-1.5-.7l-.6.3-.5-.1-.6-.7a.4.4 0 0 1 0-.4l.3-.6-.4-1.4-.8-.3a.4.4 0 0 1-.3-.4V28s0-.2.2-.3l.8-.5s0-.6.4-1.4l-.2-.4a.5.5 0 0 1 0-.5l.6-.6h.6l.3.1 1.3-.5.2-.6c0-.2.2-.2.4-.2h.9l.3.1.4.6s1.3.3 1.7.7l.5-.3h.6l.6.6c.2.1.2.4.2.5l-.4.9.4 1 .9.2.2.4v1l-.2.3-.8.3-.6 1.4.3.5v.5l-.8.8h-.5l-.7-.5h0ZM5.4 21.2s-3.9-8.8 3-13.6c6.8-4.7 16.9-1 16.9-1m8.2 11s4.5 10-2.8 14.4-16.2.8-16.2.8"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.8 31.9s-1.3-.3-2.2.1c-.2.1-.3.3-.2.6L14 34M24 7.4s1.3.3 2.2-.1c.2-.1.3-.3.2-.6 0-.2-.3-.8-.8-1.4M31 7.7s1.1-.9 2.7-.2m1 .5s.6.3.9 1m-5.9 3.2s.3 1 1.6 1.4M4.6 26.3s.6-1.6 2.4-1.5m3.7 3.3s.2.8-.2 1.5m-.5.7s-.5 1-1.7 1"
      stroke="currentColor"
      stroke-width=".8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if itemId === 'digital-footprint'}
    <path
      d="M20.1 3.46c-.64-1.37-1.63-2.05-2.48-1.69-.91.39-1.14 1.84-.52 3.36.63 1.57 1.75 2.34 2.85 1.97.6-.2.84-.92.7-1.91m-7.57-1.41c-.63.25-.65 1.28-.05 2.56.57 1.2 1.41 1.79 2.08 1.46.66-.32.75-1.44.2-2.6-.55-1.18-1.43-1.74-2.23-1.42v0Zm-1.7 6.45c.32.11.62.09.86-.09.53-.39.45-1.36-.18-2.25-.65-.9-1.49-1.23-2.14-.82-.5.32-.38 1.2.32 2.18M7.97 10.8c-.33.33-.07.98.64 1.6.66.58 1.35.7 1.68.31.34-.4.1-1.12-.54-1.68-.66-.57-1.36-.66-1.78-.23Zm-.9 3.7c-.21.43.08.92.73 1.21.6.29 1.17.15 1.37-.32.2-.47-.08-1.04-.67-1.3-.6-.28-1.16-.12-1.43.42h0Zm9.98-5.06s-10.18 3.62-5.68 11.08c0 0 1.46 2.48 3.85 4.54 2.39 2.07 4.4 2.86 6.07 6.29 1.66 3.42 4 7.45 7.9 6.51 3.9-.93 3.28-4.31 3.28-4.31"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.69 8.6s3.98 2.21-.7 9.24c0 0-2.22 2.4 1.14 5.54 3.36 3.14 7.53 6 7.53 6m1.87 2.9c-.17.35 0 .73.43.93.4.2.8.05.98-.35.17-.4 0-.83-.39-1.02-.4-.18-.8-.02-1.02.44h0ZM17.12 8.8c-.18.36 0 .74.43.94.4.2.8.05.98-.35.17-.4 0-.83-.39-1.02-.4-.18-.8-.01-1.02.44h0Z"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.14 17.35s-.65-2.5 2.75-4.86c2.7-1.87 4.14-1.83 4.8-1.4 1 .64.61 2.76-.81 4.57-1.43 1.82-3.2 4.58.38 8.43"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.76 17.97c-.17.36 0 .73.44.94.4.19.8.04.97-.35.17-.4 0-.84-.39-1.02-.4-.19-.8-.02-1.02.43h0Zm5.2-3.65s-3.51 3.56-1.38 7.11m1.31-7.98c-.18.35 0 .73.43.93.4.2.8.05.98-.35.17-.4 0-.83-.39-1.02-.4-.18-.8-.01-1.02.44h0Zm-3.49 7.98s.31 1.26 4.2 4.21c2.25 1.72 4.71 6.12 4.71 6.12s2.34 4.74 4.61 4.44c0 0 2.25-.16 2.33-1.81.08-1.65-3.44-4.27-3.44-4.27s-3.28-2.43-4.44-3.6"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26.87 33.5c-.17.36 0 .74.44.94.4.2.8.05.97-.35.17-.4 0-.83-.39-1.02-.4-.18-.8-.01-1.02.44h0Z"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M23.7 29.48s1.6 2.4 3.38 3.73m-5.95-7.51c-.17.34 0 .72.43.92.4.2.8.05.98-.34.17-.4 0-.84-.39-1.02-.4-.2-.8-.02-1.02.43h0Z"
      stroke="currentColor"
      stroke-width=".75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {/if}

  {#if showIfOwned && owned && $owned}
    <g transform="translate(20 20) scale(1.6 1.6)">
      <circle cx="6" cy="6" r="6" fill="#85817E" />
      <path
        d="M9.42843 3.42871L4.71415 8.143L2.57129 6.00014"
        stroke="white"
        stroke-width="0.857143"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  {/if}
</svg>

<style lang="postcss">
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
