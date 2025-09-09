<script setup lang="ts">
const url = useRequestURL()
</script>

<template>
  <div>
    <h1>MCP for Nuxt</h1>
    <p>MCP is mounted on {{ url }}mcp.</p>
  </div>
</template>
