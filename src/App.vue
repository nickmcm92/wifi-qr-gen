<template>
  <div>
    <div class="container">
      <Header />
      <WiFiForm @generateCode="generateCode" @resetCode="resetCode" />
      <QRImage v-if="dataURL" :dataURL="dataURL" />
    </div>
    <Footer />
  </div>
</template>

<script>
import QRImage from "./components/QRImage.vue";
import WiFiForm from "./components/WiFiForm.vue";

import QRCode from "qrcode";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  components: {
    WiFiForm,
    QRImage,
    Footer,
    Header,
  },
  data() {
    return {
      dataURL: "",
    };
  },
  methods: {
    generateCode: async function (wifi) {
      let wifiCode = `WIFI:S:${wifi.ssid};P:${wifi.password};T:${wifi.security_type};`;
      if (wifi.hidden) wifiCode += "H:true;";
      this.dataURL = await QRCode.toDataURL(wifiCode, { width: 1000 });
    },
    resetCode: function () {
      this.dataURL = "";
    },
  },
};
</script>

<style>
</style>
