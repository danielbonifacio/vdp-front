<template>
  <section id="heading">
    <Container>
      <img class="effect" src="~/assets/fx/top_effect.svg">
      <Logo />
      <Login />
    </Container>
  </section>
</template>

<script>
import Login from '@/components/atoms/Login'
import Logo from '@/components/atoms/Logo'

export default {
  components: {
    Login,
    Logo
  }
}
</script>

<style lang="scss" scoped>
#heading {
  min-height: 200px;

  .effect {
    position: absolute;
    top: 0;
    right: -300px;
    z-index: -1;

    @media screen and (max-width: 480px) {
      right: -250px;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 0;
  }

  .container {
    min-height: 64px;
    padding-top: 26px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 768px) {
      justify-content: center;
      margin-bottom: 50px;
    }
  }
}
</style>
