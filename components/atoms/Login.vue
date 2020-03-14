<template>
  <nav>
    <ul>
      <li>
        <img
          src="~/assets/user.png"
          alt=""
          tabindex="0"
        >
        <a href="#">Entrar</a>
      </li>
      <li>
        <a href="#">Criar conta</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-weight: 700;
      letter-spacing: 0.75px;

      a {
        color: #353535;
        text-decoration: none;
      }

      img {
        margin-right: 20px;
        -webkit-user-select: none;
      }

      &:not(:last-child) {
        margin-right: 10px;

        &::after {
          content: '|';
          margin-left: 10px;
          display: inline-block;
        }
      }
    }

    // hide login on mobile
    @media screen and (max-width: 768px) {
      li {
        position: absolute;
        right: 24px;
        top: 36px;

        a {
          display: none;
        }

        img {
          margin-right: 0;
          transition: .25s ease;
          outline: none;
          &:hover,
          &:focus {
            transform: scale(1.2);
          }
        }

        &:not(:last-child) {
          margin-right: 0;
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>
