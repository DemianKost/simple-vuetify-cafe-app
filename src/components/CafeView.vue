<template>
  <div>
    <v-row>
      <v-col>
        <v-breadcrumbs
          :items="breadcrumbs"
          large>
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="5">
        <v-card>

          <v-img
            height="350"
            src="https://wallpaperaccess.com/full/4326342.jpg"
            class="d-flex align-end"
          >
            <v-card-title>
              <h2 class="text-h2 white--text">K-FOOD</h2>
            </v-card-title>
          </v-img>

        </v-card>
      </v-col>

      <v-col md="7">
        <v-card class="h-100">

          <v-card-text>
            <h4 class="text-h5 mb-4">Come here if you wanna to taste cool ramen 🍜</h4>
            <v-divider></v-divider>
            <p class="mt-4 text-body-2 mr-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>

    <v-row class="cafe__menu">
      <v-col class="order-sm-2 order-xl-1" md="6">
        <v-card class="h-100">

          <v-card-text>

            <v-list-item-group>
              <v-list-item v-for="item in menu_items" :key="item.id">

                <v-list-item-avatar>
                  <v-img :src="item.img"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title class="text-subtitle-1">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-body-1 font-weight-bold">${{ item.price }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-plus</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>

          </v-card-text>

        </v-card>
      </v-col>

      <v-col class="order-sm-1 order-xl-2" md="6">
        <v-card>

          <v-img
            height="450"
            src="https://images.unsplash.com/photo-1552611052-33e04de081de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            class="d-flex align-end"
          >
            <v-card-title>
              <h2 class="text-h2 white--text">MENU</h2>
            </v-card-title>
          </v-img>

        </v-card>
      </v-col>
    </v-row>

    <CafeComment></CafeComment>
  </div>
</template>

<script>
import CafeComment from './CafeComment.vue';

export default {
  name: 'CafeView',
  components: {
    CafeComment
  },
  data: () => ({
    main_data: {
      title: 'K-FOOD',
      description: '',
      tags: ['asian', 'rame']
    },
    breadcrumbs: [
      {
        text: 'Home',
        disabled: false,
        href: '/'
      },
      {
        text: 'K-FOOD',
        disabled: true,
        href: '/cafe/view'
      }
    ],
    menu_items: [
      {
        id: 0,
        title: 'Sapporo Miso Ramen',
        img: 'https://www.rotinrice.com/wp-content/uploads/2011/01/IMG_1707.jpg',
        price: 35.99,
      },
      {
        id: 1,
        title: 'Hakata Tonkotsu Ramen',
        img: 'https://i2.wp.com/ramenkaonashi.com/wp-content/uploads/2020/10/DSC_1477-01-1-scaled.jpeg?resize=678%2C381&ssl=1',
        price: 39.99
      },
      {
        id: 2,
        title: 'Kitakata Ramen',
        img: 'http://japan-brand.jnto.go.jp/wp-content/uploads/2015/04/0702-000.jpg',
        price: 41.99
      },
      {
        id: 3,
        title: 'Wakayama Ramen',
        img: 'https://foodinjapan.org/wp-content/uploads/2020/09/wakayama.jpg',
        price: 32.99
      },
      {
        id: 4,
        title: 'Onomichi Ramen',
        img: 'https://www.tasteatlas.com/images/dishes/891c8675f9d341efb9f38a776e2954d8.jpg',
        price: 45.99,
      }
    ]
  })
}
</script>

<style>
.h-100 {
  height: 100%;
}
</style>
