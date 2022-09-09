<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="nuxt-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item>
        <nuxt-link to="/">
          Home
        </nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link to="/login">
          Login
        </nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link to="/posts">
          Posts
        </nuxt-link>
      </b-navbar-item>
      <b-navbar-item>
        <nuxt-link to="/settings">
          Settings
        </nuxt-link>
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item>
          <nuxt-link to="/about">
            About
          </nuxt-link>
        </b-navbar-item>
        <b-navbar-item>
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
  </b-navbar>
</template>
