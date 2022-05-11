<template>
  <div>
    <nav
      class="navbar header has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          busconomia
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>

        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
        </b-field>
      </div>
    </nav>

    <section>kdfh</section>
  </div>
</template>

<style scoped lang="scss">
  .navbar {
    background-color: #f46036;


    .navbar-brand{

      align-items: center;
  
      a{
        color: #fff;
      }
    }
  }
</style>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
