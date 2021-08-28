<template>
  <div>
    <v-row class="justify-center">
      <v-col md="8">
        <v-form ref="form" v-model="valid">

          <v-row>
            <v-col>
              <h2 class="text-h3 font-weight-medium text-center">Your review: </h2>
            </v-col>
          </v-row>
          <v-row>

            <v-col md="6">
              <v-text-field
                v-model="name"
                :counter="12"
                :rules="nameRules"
                label="Full Name"
                required
              ></v-text-field>
            </v-col>

            <v-col md="6">
              <v-text-field
                v-model="email"
                :counter="25"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>

            <v-col md="12">
              <v-textarea
                v-model="message"
                :counter="500"
                label="Your message to us"
                required
              ></v-textarea>
            </v-col>

            <v-col md="6">
              <v-btn
                :disabled="!valid"
                color="warning"
                class="mr-4"
                @click="sendForm"
              >
                Send
              </v-btn>
            </v-col>

          </v-row>

        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'CafeComment',
  methods: {
    sendForm() {
      this.$refs.form.validate()
    }
  },
  data:() => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    message: '',
  })
}
</script>
