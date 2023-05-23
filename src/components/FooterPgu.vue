<template>
  <v-footer class="footer">
    <div class="wrapper">
        <div class="left-footer">
          <p>Официальный интернет-портал государственных и муниципальных услуг Республики Крым</p>
         <p> © 2023 Все права защищены</p>
        </div>
        <div class="center-footer">
          <p>Техническая поддержка портала</p>
          <p>осуществляется с 09:00 до 18:00 (ПН-ЧТ), с 09:00 до 16:45 (ПТ), кроме выходных и праздничных дней. </p>
          <p>Обеденный перерыв с 13:00 до 13:45.</p>


          <p>Электронная почта: support@gosuslugi82.ru </p>
          <p>Телефон: +7 (978) 0000-910 </p>
        </div>
        <div class="right-footer">Разработка и поддержка АО «Крымтехнологии» </div>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: "FooterPgu"
}
</script>

<style scoped>

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.left-footer{
  grid-column:  1 / 6;
}

.center-footer{
  grid-column: 6 / 10;
}

.right-footer{
  grid-column: 10 / 12;
}

.footer {
  background-color: #eff5f9;
}

.footer{
  display: flex;
}

.footer > div {
  width: 1248px;
  margin: auto;
}
</style>