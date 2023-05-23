<template>
  <v-navigation-drawer
      temporary
      v-model="drawer"
  >
  </v-navigation-drawer>
  <v-app-bar class="header-1" density="compact" :elevation="0">
    <div class="header-bar">
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <div>
                  <v-btn prepend-icon="mdi-eye-outline">
                    Версия для слабовидящих
                  </v-btn>

<!--                  <v-select density="compact" variant="underlined"  class="langSelection"-->
<!--                    v-model="language"-->
<!--                    :items="languageList"-->
<!--                  >-->
<!--                  </v-select>-->

                  <v-btn append-icon="mdi-chevron-down">
                    {{language}}
                  </v-btn>
                </div>
    </div>
  </v-app-bar>

  <v-app-bar class="header-2" :elevation="0">
    <div class="header-bar">
      <div>
        <v-img src="../assets/pgu-logo.png" :width="160"></v-img>
      </div>
      <div>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn>
          Войти
        </v-btn>
        <v-btn>
          Регистрация
        </v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderPgu",
  data() {
    return {
      drawer: false,
      languageList: [
        "RUS",
        "UKR",
        "CHR",
      ],
      language: "RUS"
    }
  }
}
</script>

<style scoped>

.v-btn, select {
  font-size: 12px;
  text-transform: none;
  letter-spacing: inherit;
  color: #2341ce;
}

.header-1 {
  background-color: #e4ecfd;
}
.header-bar{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1248px;
}

.header-2 .v-btn:not(:first-child){
  background-color: #e4ecfd;
}

.header-bar div > * {
  margin: 5px 5px 5px 5px;
}

.langSelection {
 width: 55px;
  height: 40px;
}
</style>