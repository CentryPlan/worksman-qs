<template>
  <div id="app" class="bg-gray-200">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/project">Project</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    async reload() {
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>

<style src="@/assets/css/site.css" />
