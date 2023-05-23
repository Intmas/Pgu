<template>
  <v-footer class="footer">
    <div class="wrapper">
        <div class="left-footer">
          <v-img src="../assets/crimean-emblem.png" width="70"/>
          <div>
            <p>Официальный интернет-портал государственных и муниципальных услуг Республики Крым</p>
            <p> © 2023 Все права защищены</p>
          </div>

        </div>
        <div class="center-footer">
          <div>
            <h4>Техническая поддержка портала</h4>
            <div>
              <p>осуществляется с 09:00 до 18:00 (ПН-ЧТ), с 09:00 до 16:45 (ПТ), кроме выходных и праздничных дней. </p>
              <p>Обеденный перерыв с 13:00 до 13:45.</p>
            </div>
            <div>
              <p>Электронная почта: support@gosuslugi82.ru </p>
              <p>Телефон: +7 (978) 0000-910 </p>
            </div>

          </div>

        </div>
        <div class="right-footer">
          <v-img src="../assets/CT-logo.png" width="70"/>
          <div>
            <p>Разработка и поддержка </p>
            <p>АО «Крымтехнологии»</p>
          </div>

        </div>
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
  grid-template-rows: 1fr;
  padding: 65px 0 65px 0;
}

.wrapper > * {
  display: flex;
  align-items: center;
  align-content: space-between;
  padding: 0 10px 0 10px;
}

.left-footer{
  grid-column:  1 / 6;
}

.center-footer{
  grid-column: 6 / 10;
}

.center-footer > * {
  margin: 10px 0 10px 0;
}

.right-footer{
  grid-column: 10 / 13;
}

.right-footer > * {
  margin: 10px;
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