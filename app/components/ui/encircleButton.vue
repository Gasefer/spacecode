<script setup></script>
<template>
  <button class="encircle-button" type="button">
    <slot />
    <svg class="encircle-button__icon" viewBox="0 0 221 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M160.008 2.82714C77.7033 -3.44544 -9.15003 27.097 3.175 55.902C13.9199 81.0141 148.124 73.3812 193.686 55.902C223.797 44.3504 243.528 10.4142 153.716 10.4142" stroke="var(--highlight)" stroke-width="3" stroke-linecap="round"></path>
    </svg>
  </button>
</template>