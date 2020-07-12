<template>
  <div>
    {{ getCount }}
    <div>
      <button @click="addCount">add</button>
      <button @click="decCount">dec</button>
    </div>
    <input type="text" name="" id="" v-model="form1" />
    {{ form1 }}
    <button @click="sweet">Sweet</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapFields } from "vuex-map-fields"; //plugin two way binding vuex
export default {
  computed: {
    ...mapGetters("dummies", ["getCount"]),
    ...mapFields("dummies", ["form.form1"]), //two way binding vuex store
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    addCount() {
      this.$store.dispatch("dummies/increment", 1);
    },
    decCount() {
      this.$store.dispatch("dummies/decrement", 1);
    },

    sweet() {
      this.$swal("Hello Vue world!!!");
    },

    fetchUsers() {
      this.$store.dispatch("dummies/fecthUsers");
    },
  },
};
</script>

<style></style>
