<template>
  <v-app>
    <v-main>
      <v-app-bar color="indigo darken-2" app style="font-size: large;">
        <v-app-bar-nav-icon dark>
        </v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title align="right" class="pr-16">Face Detector</v-toolbar-title>
      </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
