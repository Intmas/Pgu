<template>
  <v-main>
    <div class="top-container">
      <div class="wrapper">
        <div class="item-1">
          <v-card class="menu-card" to="/">
            <div>
              <v-img :src="serviceIcon" :width="57" aspect-ratio="1/1"></v-img>
            </div>
            <div class="menu-card-text">
              <v-card-title>Все электронные услуги</v-card-title>
              <v-card-text>Электронные услуги регионального портала госуслуг Республики Крым</v-card-text>
            </div>
            <v-spacer/>
            <div>
              <v-icon icon="mdi-chevron-right" color="#0d4cd3" size="30"></v-icon>
            </div>
          </v-card>
        </div>

        <div class="item-2">
          <v-divider :thickness="1" class="border-opacity-100" color="#94b1f3"></v-divider>
          <v-window v-model="windowCurr">
            <v-window-item
                v-for="item in mainCarousel"
                :key="`card-${item}`"
            >
              <div class="window">
                <div>
                  <v-img :src="item.src" width="60"></v-img>
                </div>
                <div class="window-text">
                  <h2>{{item.title}}</h2>
                  <p>{{item.text}}</p>
                </div>
              </div>
            </v-window-item>
          </v-window>
          <v-card-actions>
            <v-btn icon="mdi-chevron-left" @click="prev"></v-btn>
            <v-item-group v-model="windowCurr">
              <v-item
                  v-for="n in mainCarousel.length"
                  :key="`btn-${n}`"
                  v-slot="{ isSelected, toggle }"
                  :value="n-1"
              >
                  <v-icon
                      :icon="isSelected ? 'mdi-circle' : 'mdi-circle-outline'"
                      size="10"
                      class="pa-2"
                      @click="toggle"
                  ></v-icon>
              </v-item>
            </v-item-group>
            <v-btn icon="mdi-chevron-right"  @click="next"></v-btn>
          </v-card-actions>
        </div>

        <div class="item-3">
          <v-list class="ml-4">
            <v-list-item
                v-for="item in mainList"
                :key="item.title"
                :items="searchList"
                :title="item.title"
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
        <div class="search-item">
          <div class="search-section">
            <v-card height="165">
              <v-autocomplete
                  @keyup="getSearch($event.target.value)"
                  label="Поиск по услугам и ведомствам"
                  menu-icon=""
                  append-inner-icon="mdi-magnify"
                  auto-select-first
                  :items="searchList"
              ></v-autocomplete>
            </v-card>
          </div>

          <section class="slider">
            <h2 class="section-title">Популярные категории электронных услуг</h2>
            <div class="popular-category">
              <v-card
                  to="/"
                  class="card-prop popular-category-card"
                  v-for="item in serviceCategories"
                  :key="item"
              ><div class="card-icon-prop">
                  <v-img :src=item.src :width="57" aspect-ratio="1/1"></v-img>
                </div>
                <div>
                  <v-card-title>{{ item.title }}</v-card-title>
                </div>
                <v-spacer/>
                  <v-icon icon="mdi-chevron-right"></v-icon>
              </v-card>
            </div>
            <div class="category-btn">
              <v-btn variant="outlined">Все электронные услуги</v-btn>
            </div>

          </section>

          <v-slide-group
              show-arrows
              class="slider"
          >
            <v-slide-group-item
                v-for="item in serviceSlides"
                :key="item"
                v-slot="{toggle }"
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
            <v-btn color="#0d4cd3" class="section-title" variant="text">все новости</v-btn>
          </div>
          <div class="news">
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
              <div >
                <div class="news-card-text">
                  <h2>{{ item.title }}</h2>
                </div>
                <div class="news-card-text">
                  <p>{{ item.date }}</p>
                </div>

              </div>
            </v-card>
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
        {title:"Выбор услуги", src: require("../assets/book-icon.svg")},
        {title:"Жизненные ситуации", src: require("../assets/home-accept-icon.svg")},
        {title:"Категории услуг", src: require("../assets/category-icon.svg")},
        {title:"Ведомства",src: require("../assets/department-icon.svg")}
      ],
      serviceCategories: [
        {title:"Пенсия, пособия и льготы", src: require("../assets/duty.svg")},
        {title:"Семья и дети", src: require("../assets/fine.svg")},
        {title:"Лицензии, справки аккредитации", src: require("../assets/jud.svg")},
        {title:"Транспорт и вождение", src: require("../assets/tax.svg")},
        {title:"Квартира, строительство и земля", src: require("../assets/file.svg")},
        {title:"Информация, связь и реклама", src: require("../assets/uin.svg")}
      ],
      mainCarousel: [
        {title: "Поделитесь своим мнением о лечении COVID-19", text: "Предложение медицинских работников по организации оказания медицинской помощи пациентам с COVID-19", src: require("../assets/medchat.png")},
        {title: "Как получить выплату на ребенка от 3 до 7 лет включительно", text: "Узнайте кому положена выплата", src: require("../assets/child.png")},
        {title: "Бесплатное горячее питание для учащихся младших классов", text: "Оценить качество предоставления бесплатного горячего питания для обучающихся по образовательным программам начального общего образования", src: require("../assets/hotfood.png")},
        {title: "Страховые гарантии медикам и их близким", text: "Как получить единовременную выплату за смерть или вред здоровью", src: require("../assets/medhandshake.png")},
        {title: "Как медикам пожаловаться на отсутствие доплат", text: "Заполните форму жалобы в Минздрав, чтобы там разобрались", src: require("../assets/rupor.png")},
        {title: "Помощь при кризисной ситуации в семье", text: "Что делать и куда обращаться", src: require("../assets/motherhood.png")},
      ],
      serviceSlides: [
        {title:"Запись в детский сад",
          src: require("../assets/child.svg"),
          color1:"#9c53fb",
          color2:"#67baaa"
        },
        {title:"Проверка очереди в детский сад", src: require("../assets/slide-icon1.svg"), color1:"#70d1ba", color2:"#5cc2ae"},
        {title:"Сервисы ФССП", src: require("../assets/scales.svg"), color1:"#5084ff", color2:"#9a54fc"},
        {title:"Процедура внесудебного банкротства гражданина", src: require("../assets/carousel4.svg"), color1:"#9c53fb", color2:"#67baaa"},
        {title:"Проверить налоговую задолженность", src: require("../assets/carousel5.svg"), color1:"#70d1ba", color2:"#5cc2ae"},
        {title:"Информация о мерах поддержки в период коронавируса", src: require("../assets/carousel6.svg"), color1:"#5084ff", color2:"#9a54fc"},
        {title:"Услуги и сервисы на Едином портале госуслуг", src: require("../assets/carousel7.svg"), color1:"#9c53fb", color2:"#67baaa"},
        {title:"Обжалуйте решение контрольного органа", src: require("../assets/carousel8.svg"), color1:"#70d1ba", color2:"#5cc2ae"},
      ],
      news: [
        {title:"Отключение Instagram в России", date:"24 мая 2022", src: require('../assets/news-card1.png')},
        {title:"В один клик: как решать жилищные вопросы, не выходя из дома", date:"24 мая 2022", src: require('../assets/news-card2.png')},
        {title:"Что делать при лёгком течении коронавируса или ОРВИ", date:"24 мая 2022", src: require('../assets/news-card3.png')},
        {title:"Выплата на детей от 3 до 7 лет: вопросы и ответы", date:"24 мая 2022", src: require('../assets/news-card4.png')},
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
          .catch(e => console.warn('CATCH:',e.name, e.message))
          .finally(()=> console.log('request done', this.searchList));
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

.v-card-title {
  font-size: 18px;
  padding: 0 0 0 40px;
}
.v-card-text {
  font-size: 12px;
  padding: 0 0 0 40px;
}

.v-list {
  background-color: inherit;
  color: inherit;
  padding: 0;
}

.v-list-item {
  font-size: 20px;
}

.v-field__outline{
  background-color: inherit;
  display: none;
}

.v-field__overlay {
  border-radius: 5px;
}

.top-container{
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #3e73f2;
  background: linear-gradient(90deg, rgba(84,140,246,1) 0%, rgba(39,90,239,1) 100%);
}

.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1.4fr;
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

.window{
  display: flex;
  align-items: center;
  min-height: 130px;
}

.window > * {
  margin: 20px 0px 0px 0px;
}

.window-text h2{
  font-size: 20px;
  padding: 0 0 16px 32px;
}

.window-text p{
  font-size: 14px;
  padding: 0 0 0px 32px;
}

.wrapper-2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 1248px;
}

.wrapper-2 > * {
  grid-column: 1 / 13;
}

.search-item {
  grid-column: 1 / 13;
}

.search-section {
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 30px 0 30px;
  top: -40px;
}

.service-list{
  margin: 15px 0 15px 0;
}

.card-prop {
  display: flex;
  align-items: center;
  box-shadow: 0 0 20px #e8e8e8;
}

.card-prop .v-card-title {
  padding-left: 20px;
}

.menu-card {
  display: flex;
  align-items: center;
  padding: 25px;
}

.menu-card-text .v-card-title {
  font-weight: 500;
  padding-bottom: 10px;
}

.menu-card-text .v-card-text {
  font-weight: 200;
  font-size: 14px;
  padding-bottom: 10px;
}

.menu-card-text > *{
  padding-left: 40px;
}

.search-section > .v-card {
  display: flex;
  align-items: center;
  padding: 10px;
}

.popular-category {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.popular-category-card{
  margin: 15px;
  min-width: 150px;
}

.category-btn {
  display: flex;
  justify-content: center;
  margin: 40px;
}

.category-btn > * {
  color: #2341ce;
  align-content: center;
  border-radius: 10px;
  padding: 24px;
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

.v-slide-group__prev {
  position: absolute;
  left: calc((100vw - 1350px)/2);
  margin-top: 100px;
}

.v-slide-group__next {
  position: absolute;
  right: calc((100vw - 1350px)/2);
  margin-top: 100px;
}

.slide > div *:first-child{
  padding-right: 16px;
}

.news {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}

.news-title {
  margin-right: 12px;
}

.news-card {
  max-width: 282px;
  min-height: 480px;
  padding: 0;
  background-color: inherit;
}

.news-card-text {
  margin: 20px 0 20px 0;
}

.news-card-text p {
  color: gray;
  font-size: 14px;
}

.news-card-text h2{
  font-weight: 400;
  font-size: 18px;
}

.news-card p {
  display: block;
  color: gray;
}

.section-title {
  margin: 40px 15px 40px 15px;
  font-weight: 400;
}

@media screen and (max-width: 700px){
 .wrapper{
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr 1fr;
 }

  .item-1 {
    grid-column: auto;
    grid-row: 1/2;
  }

  .item-2 {
    grid-column: auto;
    grid-row: 2/3;
  }

  .item-3 {
    grid-column: auto;
    grid-row: 3/4;
  }

  .popular-category {
    grid-template-columns: 1fr;
  }
}



</style>
