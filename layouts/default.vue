<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: $bodyColor;
}

body,
html {
  // prevent scroll on effects
  overflow-x: hidden;
}

img {
  max-width: 100%;
}
</style>
