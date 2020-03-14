<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 1210px;

  @media screen and (max-width: 1366px){
    max-width: 960px;
  }

  @media screen and (max-width: 1110px){
    max-width: 640px;
  }

  @media screen and (max-width: 768px){
    max-width: 430px;
    padding: 0 16px;
  }

  @media screen and (max-width: 480px){
    max-width: 380px;
  }
}
</style>
