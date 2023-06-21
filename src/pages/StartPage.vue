<template>
  <v-main>
    <div class="top-container">
      <div class="wrapper">
        <div class="item-1">
          <v-card to="/">
            <div class="menu-card">
              <div class="menu-card-icon">
                <v-img :src="serviceIcon" style="padding-right: 15px" :height="57" aspect-ratio="1/1"/>
                <div>
                  <h2>Все электронные услуги </h2>
                  <p>Электронные услуги регионального портала госуслуг Республики Крым</p>
                </div>
              </div>
              <div>
                <v-icon icon="mdi-chevron-right" color="#0d4cd3" size="30"></v-icon>
              </div>
            </div>

          </v-card>
        </div>

        <div class="item-2">
          <v-divider :thickness="1" class="border-opacity-100" color="white"></v-divider>
          <div class="window-wrapper">
            <div>
              <v-window v-model="windowCurr">
                <v-window-item
                    v-for="item in mainCarousel"
                    :key="`card-${item}`"
                >
                  <v-card
                      elevation="0"
                      to="/"
                      class="window"
                  >
                    <div>
                      <v-img :src="item.src" width="60"></v-img>
                    </div>
                    <div class="window-text">
                      <h2>{{ item.title }}</h2>
                      <p class="ellipsis-multilines">{{ item.text }}</p>
                    </div>

                  </v-card>
                </v-window-item>
              </v-window>
              <v-card-actions>
                <div class="window-action">
                  <v-btn icon="mdi-chevron-left" @click="prev"></v-btn>
                  <v-item-group
                      v-model="windowCurr"
                      mandatory
                  >
                    <v-item
                        v-for="n in mainCarousel.length"
                        :key="`btn-${n}`"
                        v-slot="{ isSelected, toggle }"
                        :value="n-1"
                    >
                      <v-icon
                          :icon="isSelected ? 'mdi-circle' : 'mdi-circle-outline'"
                          size="10"
                          class="pa-2 pb-3"
                          @click="toggle"
                      ></v-icon>
                    </v-item>
                  </v-item-group>
                  <v-btn icon="mdi-chevron-right" @click="next" class="ma-0"></v-btn>
                </div>
              </v-card-actions>
            </div>
          </div>
        </div>

        <div class="item-3">
          <v-list class="ml-4">
            <v-list-item
                v-for="item in mainList"
                :key="item.title"
                :items="searchList"
                :title="item.title"
                to="/"
                class="service-list"
            >
              <template v-slot:prepend>
                <v-img :src=item.src :width="32" class="mr-8"></v-img>
              </template>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </div>

    <div class="container">
      <div class=" wrapper-2">
        <div>
          <div class="search-item">
            <v-card class="search-card" elevation="0">
              <div>
                <p>Поиск по услугам и ведомствам</p>
              </div>
              <v-autocomplete
                  @keyup="getSearch($event.target.value)"
                  menu-icon=""
                  append-inner-icon="mdi-magnify"
                  style="color: #033cfc;"
                  :item="searchList"
              ></v-autocomplete>
            </v-card>
          </div>

          <section>
            <h2 class="section-title">Популярные категории электронных услуг</h2>
            <div class="popular-category">
              <v-card
                  to="/"
                  class="card-prop popular-category-card"
                  v-for="item in serviceCategories"
                  :key="item"
              >
                <div class="card-icon-prop">
                  <v-img :src=item.src :width="57" aspect-ratio="1/1"></v-img>
                </div>
                <div>
                  <h2>{{ item.title }}</h2>
                </div>
                <v-spacer/>
                <v-icon icon="mdi-chevron-right"></v-icon>
              </v-card>
            </div>
            <div class="category-btn">
              <v-btn
                  variant="outlined"
                  class="category-btn-text"
                  text="Все электронные услуги"
              ></v-btn>
            </div>
          </section>


          <v-slide-group class="slider">
            <v-slide-group-item
                v-for="item in serviceSlides"
                :key="item"
                v-slot="{toggle}"
            >
              <v-card
                  class="slide"
                  theme="dark"
                  :style="getGradient(item.color1, item.color2)"
                  @click="toggle"
              >
                <div>
                  <p><b>{{ item.title }}</b></p>
                </div>
                <v-spacer/>
                <div>
                  <v-img :src=item.src :width="135" aspect-ratio="1/1"></v-img>
                </div>

              </v-card>
            </v-slide-group-item>
          </v-slide-group>
          <article>
            <div class="news">
              <h2 class="section-title">Новости портала госуслуг Республики Крым</h2>
              <v-spacer/>
              <v-btn
                  class="section-btn hidden"
                  color="#0d4cd3"
                  variant="text"
              >все новости
              </v-btn>
            </div>
            <div class="scroll-card news">
              <v-card
                  v-for="item in news"
                  :key="item"
                  class="news-card"
                  elevation="0"
                  min-width="285"
                  to="/"
              >
                <v-img
                    :src=item.src
                />
                <div>
                  <div class="news-card-text">
                    <h2>{{ item.title }}</h2>
                  </div>
                  <div class="news-card-text">
                    <p>{{ item.date }}</p>
                  </div>

                </div>
              </v-card>
            </div>
            <div class="narrow-media">
              <v-btn
                  class="category-btn-text"
                  style="padding: 16px"
                  color="#0d4cd3"
                  variant="text"
              >Все новости
              </v-btn>
            </div>
          </article>
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>

import request from "@/services/RequestServiceMock";

export default {
  name: 'StartPage',
  data() {
    return {
      searchList: "",
      serviceIcon: require("../assets/icon1.png"),
      mainList: [
        {title: "Выбор услуги", src: require("../assets/book-icon.svg")},
        {title: "Жизненные ситуации", src: require("../assets/home-accept-icon.svg")},
        {title: "Категории услуг", src: require("../assets/category-icon.svg")},
        {title: "Ведомства", src: require("../assets/department-icon.svg")}
      ],
      serviceCategories: [
        {title: "Пенсия, пособия и льготы", src: require("../assets/duty.svg")},
        {title: "Семья и дети", src: require("../assets/fine.svg")},
        {title: "Лицензии, справки аккредитации", src: require("../assets/jud.svg")},
        {title: "Транспорт и вождение", src: require("../assets/tax.svg")},
        {title: "Квартира, строительство и земля", src: require("../assets/file.svg")},
        {title: "Информация, связь и реклама", src: require("../assets/uin.svg")}
      ],
      mainCarousel: [
        {
          title: "Поделитесь своим мнением о лечении COVID-19",
          text: "Предложение медицинских работников по организации оказания медицинской помощи пациентам с COVID-19",
          src: require("../assets/medchat.png")
        },
        {
          title: "Как получить выплату на ребенка от 3 до 7 лет включительно",
          text: "Узнайте кому положена выплата",
          src: require("../assets/child.png")
        },
        {
          title: "Бесплатное горячее питание для учащихся младших классов",
          text: "Оценить качество предоставления бесплатного горячего питания для обучающихся по образовательным программам начального общего образования",
          src: require("../assets/hotfood.png")
        },
        {
          title: "Страховые гарантии медикам и их близким",
          text: "Как получить единовременную выплату за смерть или вред здоровью",
          src: require("../assets/medhandshake.png")
        },
        {
          title: "Как медикам пожаловаться на отсутствие доплат",
          text: "Заполните форму жалобы в Минздрав, чтобы там разобрались",
          src: require("../assets/rupor.png")
        },
        {
          title: "Помощь при кризисной ситуации в семье",
          text: "Что делать и куда обращаться",
          src: require("../assets/motherhood.png")
        },
      ],
      serviceSlides: [
        {
          title: "Запись в детский сад",
          src: require("../assets/child.svg"),
          color1: "#9c53fb",
          color2: "#67baaa"
        },
        {
          title: "Проверка очереди в детский сад",
          src: require("../assets/slide-icon1.svg"),
          color1: "#70d1ba",
          color2: "#5cc2ae"
        },
        {title: "Сервисы ФССП", src: require("../assets/scales.svg"), color1: "#5084ff", color2: "#9a54fc"},
        {
          title: "Процедура внесудебного банкротства гражданина",
          src: require("../assets/carousel4.svg"),
          color1: "#9c53fb",
          color2: "#67baaa"
        },
        {
          title: "Проверить налоговую задолженность",
          src: require("../assets/carousel5.svg"),
          color1: "#70d1ba",
          color2: "#5cc2ae"
        },
        {
          title: "Информация о мерах поддержки в период коронавируса",
          src: require("../assets/carousel6.svg"),
          color1: "#5084ff",
          color2: "#9a54fc"
        },
        {
          title: "Услуги и сервисы на Едином портале госуслуг",
          src: require("../assets/carousel7.svg"),
          color1: "#9c53fb",
          color2: "#67baaa"
        },
        {
          title: "Обжалуйте решение контрольного органа",
          src: require("../assets/carousel8.svg"),
          color1: "#70d1ba",
          color2: "#5cc2ae"
        },
      ],
      news: [
        {title: "Отключение Instagram в России", date: "24 мая 2022", src: require('../assets/news-card1.png')},
        {
          title: "В один клик: как решать жилищные вопросы, не выходя из дома",
          date: "24 мая 2022",
          src: require('../assets/news-card2.png')
        },
        {
          title: "Что делать при лёгком течении коронавируса или ОРВИ",
          date: "24 мая 2022",
          src: require('../assets/news-card3.png')
        },
        {
          title: "Выплата на детей от 3 до 7 лет: вопросы и ответы",
          date: "24 мая 2022",
          src: require('../assets/news-card4.png')
        },
      ],
      windowN: 3,
      windowCurr: 0,
    }
  },
  methods: {
    getSearch(text) {
      request.getSearchData(text)
          .then(response => {
            console.log('response.data:', response.data);
            this.searchList = response.data.favour['result']

          })
          .catch(e => console.warn('CATCH:', e.name, e.message))
          .finally(() => console.log('request done', this.searchList));
    },
    getGradient(color1, color2) {
      return "background: linear-gradient(130deg," + color1 + " 0%," + color2 + " 80%)"
    },
    next() {
      this.windowCurr =
          this.windowCurr + 1 > this.windowN ? 0 : this.windowCurr + 1
    },
    prev() {
      this.windowCurr =
          this.windowCurr - 1 < 0 ? this.windowN : this.windowCurr - 1
    },
  },
  mounted() {
    this.windowN = this.mainCarousel.length - 1
  }
}
</script>

<style>


@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

.v-main {
  font-family: 'Roboto', sans-serif;
  background-color: #fafcff;
  font-weight: 400;
  font-size: 16px;
}

.v-btn {
  padding: 6px;
}

.v-card {
  padding: 24px;
  border-radius: 10px;
}

.card-icon-prop {
  padding-right: 16px;
}

.ellipsis-multilines {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

h2 {
  font-size: 18px;
  font-weight: 400;
}

.v-card-text {
  font-size: 12px;
}

.v-list {
  background-color: inherit;
  color: inherit;
  padding: 0;
}

.v-list-item {
  font-size: 20px;
}

.v-field__outline {
  background-color: inherit;
  display: none;
}

.v-field__overlay {
  border-radius: 5px;
}

.top-container {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #3e73f2;
  background: linear-gradient(90deg, rgba(84, 140, 246, 1) 0%, rgba(39, 90, 239, 1) 100%);
}

.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.5fr;
  width: 1248px;
}

.item-1 {
  grid-column: 1 / 9;
  grid-row: 1 / 2;
}

.item-2 {
  grid-column: 1 / 9;
  grid-row: 2 / 3;
  margin: 0 24px 0 24px;
}

.item-3 {
  grid-column: 9 / 13;
  grid-row: 1 / 3;
}

.item-1, .item-3 {
  margin: 24px;
}

.item-2, .item-3 {
  color: white;
}

.window {
  display: flex;
  min-height: 120px;
  align-items: center;
  color: white;
  background: inherit;
  padding: 0;
}


.window-text {
  padding: 0 0 0px 32px;
}

.window-text h2 {
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 16px;
}

.window-text p {
  font-size: 14px;
  text-overflow: ellipsis;
}

.wrapper-2 {
  display: grid;
  position: initial;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 1248px;
}

.wrapper-2 > * {
  grid-column: 1 / 13;
}

.search-item {
  grid-column: 1 / 13;
  position: relative;
  top: -40px;
  margin: 0 30px 0 30px;
}

.service-list {
  margin: 15px 0 15px 0;
}

.v-list-item__overlay {
  background: none !important;
}

.card-prop {
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px #e1ecf8 !important;
}

.menu-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu-card-icon {
  display: flex;
  align-items: center;
}

.menu-card-text {
  display: block;
}

.menu-card h2 {
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 10px;
}

.menu-card p {
  font-weight: 200;
  font-size: 14px;
}

.window-action {
  display: flex;
  align-items: center;
}

.search-section > .v-card {
  display: flex;
  align-items: center;
  padding: 24px;
  font-weight: 300;
  font-size: 14px;
}

.search-card {
  display: block !important;
  height: 155px;
  box-shadow: 0 2px 4px #e1ecf8 !important;
}

.popular-category {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.popular-category-card {
  margin: 15px;
  min-width: 150px;
  padding-right: 18px;
}

.category-btn {
  display: flex;
  justify-content: center;
  margin: 40px;
}

.category-btn-text {
  align-content: center;
  text-transform: unset;
  font-weight: 300;
  font-size: 16px;
  color: #2341ce;
  border-radius: 10px;
  padding: 24px 40px;
}

.slider {
  margin: 0px auto 60px auto;
}

.slide {
  display: flex;
  width: 385px;
  font-size: 18px;
  font-weight: 400;
  height: 190px;
  border-radius: 15px;
  padding: 24px;
  margin: 15px;
}

.v-slide-group__prev, .v-slide-group__next {
  position: absolute;
  box-shadow: 0 0px 10px #e1ecf8;
  border-radius: 50px;
  margin-top: 85px;
  height: 50px;
  z-index: 1;
}

.v-slide-group__prev {
  left: calc((100vw - 1350px) / 2);
}

.v-slide-group__next {
  right: calc((100vw - 1350px) / 2);
}


.slide > div *:first-child {
  padding-right: 16px;
}

.news {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}

.news-title {
  margin-right: 12px;
}

.news-card {
  max-width: 282px;
  min-height: 480px;
  padding: 0 8px;
  background-color: inherit;
}

.news-card-text {
  margin: 20px 0 20px 0;
}

.news-card-text p {
  color: gray;
  font-size: 14px;
}

.news-card-text h2 {
  font-weight: 400;
  font-size: 18px;
}

.news-card p {
  display: block;
  color: gray;
}

.section-title {
  margin: 0px 15px;
  font-weight: 400;
  font-size: 24px;
}

.section-btn {
  font-weight: 400;
  font-size: 14px;
}

.scroll-card {
  overflow: auto;
  scrollbar-width: none;

}

.narrow-media {
  display: none;
}

@media screen and (max-width: 1360px) {
  .hidden {
    display: none;
  }

  .ellipsis-multilines {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }


  .narrow-media {
    display: block;
  }

  .v-main {
    --v-layout-top: 64px !important;
  }

  .top-container {
    background-color: #3e73f2;
    background: linear-gradient(0deg, rgba(84, 140, 246, 1) 0%, rgba(39, 90, 239, 1) 100%);
  }

  .wrapper {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .item-1 {
    grid-column: auto;
    margin: 24px 15px 30px;
    grid-row: 1/2;
  }

  .item-2 {
    grid-column: auto;
    min-height: 300px;
    margin: 0 15px 15px;
    grid-row: 2/3;
  }

  .v-card-actions {
    align-content: end;
  }

  .window-wrapper {
    padding: 16px 0;
  }

  .window {
    padding-right: 16px;
    min-height: 160px;
    margin-top: auto;

  }

  .window-text {
    padding: 0 0 0 10px;
  }

  .window-action {
    margin: auto;
  }

  .item-3 {
    display: none;
  }

  .wrapper-2 {
    position: relative;
    top: -60px;
  }

  .search-item {
    position: initial;
    margin: 0 15px;
  }

  .section-title {
    margin: 15px;
    font-weight: 400;
    font-size: 24px;
  }

  .v-slide-group__prev {
    display: none;
  }

  .v-slide-group__next {
    display: none;
  }

  .popular-category {
    grid-template-columns: 1fr;
  }

  .search-card {
    display: block !important;
    height: 130px;
    padding-top: 0px !important;
  }

  .search-card p {
    padding: 10px 0 10px 0;
  }

  .category-btn {
    margin: 20px;
  }

  .section-btn {

  }

  .news, .slider {
    margin: 0;
  }

  .news-card {
    padding: 0 16px;
  }
}


</style>
