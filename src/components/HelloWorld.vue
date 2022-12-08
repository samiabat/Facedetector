<template>
  <v-row>
    <v-col cols="12" md="5">
      <v-card color="grey">
        <pre>

        </pre>
        <v-img :src="require('../assets/upload.png')" class="ma-md-12 ma-8" contain height="260" />
        <v-form align="center" class="pa-md-16 pa-8">
          <v-btn @click="(this.show = !this.show)" color="red" block height="60">
            Take Camera
          </v-btn>
          <h3>OR</h3>
          <v-btn @click="$store.dispatch('fetchUsers')" color="blue" block class="mt-5" height="60">
            Upload Photo
          </v-btn>
          <pre>
            </pre>
          <hr>
          <pre>
            </pre>
          <v-btn @click="$store.dispatch('fetchUsers')" color="green" block class="mt-5" height="60">
            Find Person
          </v-btn>
        </v-form>
      </v-card>
    </v-col>
    <v-col cols="12" md="7">
      <div color="F5F5F5" class="pa-md-16 pa-8">
        <h2 class="text-center">
          Well come to Face detector <br />This is Jhon doe.
        </h2>
        <p v-if="this.show" >
          {{$store.state.users}}
        </p>
        <pre>


        </pre>
        <h2>
          Who is Jhon doe?
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum <i style="color:blue"><strong>More...</strong></i>
        </p>
        <pre>

        </pre>
        <h2>
          Other similarities
        </h2>
        <ul>
          <li>Abebe Kebede</li>
          <li>Alemu Ayele</li>
          <li>Jhon smith</li>
          <i style="color:blue"><strong>More...</strong></i>
        </ul>
      </div>
    </v-col>
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent
          ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet
          dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum
          ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>FACE DETECTOR</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-row>
</template>

<script>


export default {
  name: 'HelloWorld',
  
  data() {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
      show: false,
      datas: [],
    }
  },
}
</script>
