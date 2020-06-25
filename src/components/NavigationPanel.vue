<template>
  <div>
    <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
          <span>{{$t('text.link')}}</span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav variant="faded" type="light">
            <b-nav-item>
              <router-link to="/" disabled>
                <span>{{$t('text.home')}}</span>
              </router-link></b-nav-item>
            <b-nav-item>
              <router-link to="/Chart">
                <span>{{$t('text.chart')}}</span>
              </router-link>
            </b-nav-item>
            
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <router-link to="/About">
                <span>{{$t('text.about')}}</span>
              </router-link>
            </b-nav-item>
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item @click="setLocale('en')">{{$t('text.english')}}</b-dropdown-item>
                <b-dropdown-item @click="setLocale('fr')">{{$t('text.french')}}</b-dropdown-item>
              </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-jumbotron>
  </div>
</template>

<script>

export default {
  name: 'NavigationPanel',
  data: () => {
    return {
      showNavigation: false
    };
  },
  methods: {
    setLocale(locale) {
      this.$root.$i18n.locale = locale;
      localStorage.setItem("locale", locale);
    }
  },
  beforeMount() {
    const locale = localStorage.getItem("locale") || "en";
    this.$root.$i18n.locale = locale;
  }
};
</script>

<style>
.center {
  text-align: center;
}
form {
  width: 95vw;
  margin: 0 auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>