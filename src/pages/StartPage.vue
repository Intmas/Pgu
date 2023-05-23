<template>
  <v-main>
    <div class="top-container">
      <div class="wrapper">
        <div class="item-1">
          <v-card class="card-prop">
            <div class="card-icon-prop">
              <v-img src="../assets/icon1.png" :width="57" aspect-ratio="1/1"></v-img>
            </div>
            <div>
              <v-card-title>Все электронные услуги</v-card-title>
              <v-card-text>Электронные услуги регионального портала госуслуг Республики Крым</v-card-text>
            </div>
            <v-spacer/>
            <div>
              <v-card-actions>
                <v-btn icon="mdi-chevron-right"></v-btn>
              </v-card-actions>
            </div>
          </v-card>
        </div>

        <div class="item-2">
          <v-divider :thickness="1" class="border-opacity-100" color="#94b1f3"></v-divider>
          <v-carousel
              cycle
              height="200"
              :continuous="false"
              :show-arrows="false"
              hide-delimiter-background
              class="carousel"
          >

            <v-carousel-item
                v-for="item in mainCarousel"
                :key="item"
            >
              <v-sheet
                  color="#3e73f2"
                  height="100%"
              >
                <div class="carousel">
                  <v-icon :icon="item.icon" size="70px" class="card-icon-prop"></v-icon>
                  <div>
                    <h2>{{item.title}}</h2>
                    <p>{{item.text}}</p>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div class="item-3">
          <v-list>
            <v-list-item
                v-for="item in mainList"
                :key="item.title"
                :title="item.title"
                :prepend-icon="item.icon"
                class="service-list"
            ></v-list-item>
          </v-list>
        </div>
      </div>
    </div>

    <div class="container">
      <div class=" wrapper-2">
        <div class="search-item">
          <div class="search-section">
            <v-card height="95">
              <v-select
                  label="Поиск по услугам и ведомствам"
                  variant="underlined"
                  append-icon="mdi-magnify"
              ></v-select>
            </v-card>
          </div>

          <section>
              <h2 class="section-title">Популярные категории электронных услуг</h2>
              <div class="popular-category">
                <v-card
                    class="card-prop popular-category-card"
                    v-for="item in serviceCategories"
                    :key="item"
                ><div class="card-icon-prop">
                    <v-img :src=item.src :width="57" aspect-ratio="1/1"></v-img>
                  </div>
                  <div>
                    <v-title>{{ item.title }}</v-title>
                  </div>
                  <v-spacer/>
                  <v-card-actions>
                    <v-btn icon="mdi-chevron-right"></v-btn>
                  </v-card-actions>
                </v-card>
              </div>
              <v-btn class="category-btn">Все электронные услуги</v-btn>
          </section>

          <v-slide-group show-arrows>
            <v-slide-group-item
                v-for="item in serviceSlides"
                :key="item"
                v-slot="{toggle }"
            >
              <v-card
                  class="slide"
                  theme="dark"
                  :color="item.color"
                  @click="toggle"
              >
                <div>
                  <v-card-title>{{ item.title }}</v-card-title>
                </div>
                <div>
                  <v-img :src=item.src :width="57" aspect-ratio="1/1"></v-img>
                </div>

              </v-card>
            </v-slide-group-item>
          </v-slide-group>


          <article>
          <div>
            <h2>Новости портала госуслуг Республики Крым</h2>
          </div>
          <div class="news">
            <v-card
                v-for="item in news"
                :key="item"
                class="news-card"
                elevation="0"
                min-width="285"
            >
              <v-img
                  :src=item.src

              />
              <div class="news-card-text">
                <v-title>{{ item.title }}</v-title>
                <p>{{ item.date }}</p>
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

export default {
  name: 'StartPage',
  data() {
    return {
      mainList: [
        {title:"Выбор услуги", icon:"mdi-information"},
        {title:"Жизненные ситуации", icon:"mdi-information"},
        {title:"Категории услуг", icon:"mdi-information"},
        {title:"Ведомства", icon:"mdi-information"}
      ],
      serviceCategories: [
        {title:"Пенсия, пособия и льготы", src: require("../assets/icon1.png")},
        {title:"Семья и дети", src: require("../assets/icon1.png")},
        {title:"Лицензии, справки аккредитации", src: require("../assets/icon1.png")},
        {title:"Транспорт и вождение", src: require("../assets/icon1.png")},
        {title:"Квартира, строительство и земля", src: require("../assets/icon1.png")},
        {title:"Информация, связь и реклама", src: require("../assets/icon1.png")}
      ],
      mainCarousel: [
        {title: "Поделитесь своим мнением о лечении COVID-19", text: "Предложение медицинских работников по организации оказания медицинской помощи пациентам с COVID-19", icon: "mdi-information"},
        {title: "Как получить выплату на ребенка от 3 до 7 лет включительно", text: "Узнайте кому положена выплата", icon: "mdi-information"},
      ],
      serviceSlides: [
        {title:"Запись в детский сад", src: require("../assets/icon1.png"), color:"green"},
        {title:"Проверка очереди в детский сад", src: require("../assets/icon1.png"), color:"green"},
        {title:"Сервисы ФССП", src: require("../assets/icon1.png"), color:"green"},
        {title:"", src: require("../assets/icon1.png"), color:"green"},
        {title:"", src: require("../assets/icon1.png"), color:"green"},
      ],
      news: [
        {title:"Отключение Instagram в России", date:"24 мая 2022", src: require('../assets/news-card1.png')},
        {title:"В один клик: как решать жилищные вопросы, не выходя из дома", date:"24 мая 2022", src: require('../assets/news-card2.png')},
        {title:"Что делать при лёгком течении коронавируса или ОРВИ", date:"24 мая 2022", src: require('../assets/news-card3.png')},
        {title:"Выплата на детей от 3 до 7 лет: вопросы и ответы", date:"24 мая 2022", src: require('../assets/news-card4.png')},
      ],
      src1: "../assets/news-card2.png"
    }
  }
}
</script>

<style>

.v-main {
  background-color: #fafcff;
}

ul, li {
  list-style-type: none;
}

.v-btn {
  padding: 6px;
}

.v-card {
  padding: 24px;
  border-radius: 10px;
}

.v-card-title, .v-carousel h2 {
  font-size: 18px;
  padding: 0 16px 0 16px;
}
.v-card-text, .v-carousel p{
  font-size: 12px;
  padding: 0 16px 0px 16px;
}

.v-list {
  background-color: inherit;
  color: inherit;
  padding: 0;
}

.v-list-item {
  font-size: 20px;
}

.top-container{
  display: flex;
  justify-content: center;
  height: 430px;
  width: 100%;
  background-color: #3e73f2;
}

.container {
  display: flex;
  justify-content: center;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
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

.carousel {
  display: flex;
  align-items: center;
  color: white;
}

.carousel > * {
  margin: 20px 0px 0px 0px;
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
  margin: 0px 0 20px 0;
}

.card-prop {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}

.card-prop > *:not(:first-child) {
  padding: 0 8px 0 8px;
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
  margin: 10px;
}

.category-btn {
  display: block;
  margin: auto;
}

.slide {
 width: 385px;
  height: 190px;
  padding: 16px;
  border-radius: 15px;
  margin: 15px;
}

.news {
  display: flex;
}

.news-card {
  margin: 12px;
  width: 282px;
  height: 480px;
  padding: 0;
  background-color: inherit;
}

.news-card > div {
  padding: 12px;
}

.news-card-text .v-card-title {
  font-size: 40px;
  color: gray;
}

.news-card p {
  display: block;
  color: gray;
}

</style>
