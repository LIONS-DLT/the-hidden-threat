<script lang="ts">
  import { onMount } from 'svelte'
  import { PerfectCursor } from 'perfect-cursors'

  export let position: { name: string; position: [number, number] }

  let perfectCursor: PerfectCursor | undefined

  $: perfectCursor?.addPoint(position.position)

  let el: HTMLDivElement

  onMount(() => {
    perfectCursor = new PerfectCursor(([x, y]) => {
      el.style.setProperty('translate', `${x}px ${y}px`)
    })
    return () => {
      perfectCursor?.dispose()
    }
  })
</script>

<div bind:this={el} class="cursor">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="white"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path
      d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z"
    />
  </svg>

  <span class="name">{position.name}</span>
</div>

<style lang="postcss">
  .cursor {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    & svg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      translate: -15% -20%;
      width: 1.5rem !important;
      max-width: none;
      height: 1.5rem !important;
    }
    .name {
      display: inline-block;
      position: absolute;
      top: 0.5rem;
      left: 1.5rem;
      border-radius: var(--radius-sm);
      background: #000a;
      padding: 0.25rem 0.5rem;
      max-width: 7rem;
      overflow: hidden;
      font-size: var(--scale-000);
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
</style>
