<template>
  <v-navigation-drawer
      temporary
      v-model="drawer"
  >
  </v-navigation-drawer>
  <v-app-bar class="header-1" density="compact" :elevation="0">
    <div class="header-bar">
                <v-app-bar-nav-icon
                    @click="drawer = !drawer"
                    icon="mdi-format-align-left"
                />
                <div class="select-lan">
                  <v-btn prepend-icon="mdi-eye-outline">
                    Версия для слабовидящих
                  </v-btn>
                  <v-menu location="bottom">
                    <template v-slot:activator="{ props }">
                      <v-btn v-bind="props">
                        <v-img width="22" :src="language.src" class="pr-1"></v-img>
                        {{language.lang}}
                        <v-icon icon="mdi-chevron-down"></v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item v-for="lang in languageList" :key="lang" @click="language = lang">
                        <v-list-item-title>{{ lang.lang }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
    </div>
  </v-app-bar>

  <v-app-bar class="header-2" :elevation="0">
    <div class="header-bar">
      <div style="display: flex">
        <v-app-bar-nav-icon
            class="narrow-media"
            @click="drawer = !drawer"
            icon="mdi-format-align-left"
        />
        <v-img src="../assets/pgu-logo.png" :max-width="160"></v-img>
      </div>
      <div class="btn-group">
        <v-btn class="media" icon="mdi-magnify" style="size: 30px"></v-btn>
        <v-btn class="narrow-btn">
          Войти
        </v-btn>
        <v-btn class="media">
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
        { lang:"RUS", src:require("../assets/RUS.svg") },
        { lang:"UKR", src:require("../assets/UKR.svg") },
        { lang:"CHR", src:require("../assets/CHR.svg") },
      ],
      language: {
        lang: "RUS",
        src:require("../assets/RUS.svg")
      }
    }
  }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.v-btn, select {
  font-size: 12px;
  text-transform: none;
  letter-spacing: inherit;
  color: #2341ce;
  font-weight: 400;
}

.header-1 {
  font-size: 14px;
  background-color: #e4ecfd;

}
.header-bar {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1248px;
}

.header-2 .v-btn:not(:first-child) {
  background-color: #e4ecfd;
  border-radius: 6px;

  padding: 10px 20px 10px 20px;
  align-content: center;
}

.header-bar div > * {
  margin: 5px 5px 5px 5px;
}

.btn-group {
  display: flex;
  align-items: center;
}
.v-field__input {
  width: 55px;
  height: 40px;
}

.v-input--horizontal {
  grid-template-areas: inherit;
}

.select-lan {
  display: flex;
}

.select-field {
  font-weight: 400;
}

.media {
  display: block;
}

.narrow-media {
  display: none;
}

@media screen and (max-width: 1360px){
  .media {
    display: none;
  }

  .narrow-media {
    display: block;
  }

  .v-app-bar {
    width: auto;
  }

  header {
    top: 0 !important;
    width: 100%;
  }
  .header-1 {
    display: none;
    top: 0;
  }

  .narrow-btn {
    background-color: inherit !important;
  }
}
</style>