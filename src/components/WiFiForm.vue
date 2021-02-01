<template>
  <form action="">
    <b-field label="SSID">
      <b-input v-model="ssid"></b-input>
    </b-field>
    <b-field label="Security">
      <b-select v-model="security_type" expanded>
        <option value="WPA">WPA</option>
        <option value="WEP">WEP</option>
        <option value="nopass">None</option>
      </b-select>
    </b-field>
    <b-field v-if="security_type !== 'nopass'" label="Password">
      <b-input v-model="password"></b-input>
    </b-field>
    <b-checkbox v-model="hidden"><span class="label">Hidden SSID</span></b-checkbox>
    <nav class="level">
      <div class="level-item has-text-centered">
        <b-button @click="submitForm" label="Generate" type="is-primary" />
      </div>
      <div class="level-item has-text-centered">
        <b-button @click="resetForm" label="Reset" type="is-light" />
      </div>
    </nav>
  </form>
</template>

<script>
export default {
  data() {
    return {
      ssid: "",
      password: "",
      security_type: "WPA",
      hidden: false,
    };
  },
  methods: {
    escapeInput: function (input) {
      // Need to escape special characters: \ ; , : "
      return input.replace(/\\|;|,|:|"/g, "\\$&");
    },
    submitForm: function () {
      // Ensure that no password is included
      if (this.security_type === "nopass") this.password = "";
      this.$emit("generateCode", {
        ssid: this.escapeInput(this.ssid),
        password: this.escapeInput(this.password),
        security_type: this.escapeInput(this.security_type),
        hidden: this.hidden,
      });
    },
    resetForm: function () {
      this.ssid = "";
      this.password = "";
      this.security_type = "WPA";
      this.hidden = false;
      this.$emit("resetCode");
    },
  },
};
</script>

<style>
</style>