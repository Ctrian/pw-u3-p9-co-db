<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del estudiante</h1>
  <h3>{{ idEdtudiante }}</h3>
  <button v-on:click="agregar()">Agregar</button>
</template>

<script>
export default {
  methods: {
    agregar() {
      this.idEdtudiante = this.$route.params.id;
    },
  },
  data() {
    return {
      idEdtudiante: null,
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.anio + " obtenido desde query params");
    console.log(this.$route.query.mes + " obtenido desde query params");
    console.log(this.$route.query.apellido + " obtenido desde query params");
    // this.idEdtudiante = this.$route.params.id;
  },
};
</script>

<style>
</style>