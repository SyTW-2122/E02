<template>
  <div class = "container">
    <b-row class = "slider" v-for="(activity,i) in userActivity" :key="i">
      <b-row class = "routine-card border-bottom pt-4 pb-4 pr-0" v-if="activity.type === 'routine'">
        <b-col cols="12">
          <b-row>
            <b-col class ="activity-info" cols="9">
              <b-row>
                <b-col class = "creator-info">
                  <p class="user-creator"> {{ activity.activeUser }} </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class = "creator-info">
                  <p class="user-creator create-date"> {{ activity.createDate }} </p>
                </b-col>
              </b-row>
            </b-col>
            <b-col
            class="mb-2"
            cols="3"
            v-bind="getImage(activity.activeUser, i)"
            :id="`image${i}`">
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-img
              fluid
              center
              class="img-sm-limit center-md-cropped bg-secondary rounded activity-img"
              :src="activity.image" />
            </b-col>
            <b-col cols=6>
              <b-row>
                <b-col>
                  <p class="text-center title"><b>{{ activity.title }}</b></p>
                </b-col>
              </b-row>
              <b-row>
                <b-col class="pr-0">
                  <p class="text-justify activity-description"> {{ activity.description }} </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p class="estimated-time">Tiempo estimado: {{ activity.estimatedTime }}</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="likes" cols="8" v-if="activity.likes.length > 0">
              <p>
                Le gusta a {{ activity.likes[0] }} y a {{ activity.likes.length - 1 }} más
              </p>
            </b-col>
            <b-col cols="8" v-else>
              <p> 0 me gusta</p>
            </b-col>
            <b-col cols="2">
              <font-awesome-icon icon="heart" class="far"/>
            </b-col>
            <b-col cols="2">
              <font-awesome-icon icon="comment" class="far"/>
            </b-col>
          </b-row>
          <b-row class="comments" v-for="(comments,index) in activity.comments" :key="index">
            <b-col >
              <p><b> {{ comments.user }}</b> {{ comments.comment }} </p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class = "routine-card border-bottom pt-4 pb-4" v-if="activity.type === 'like'">
        <b-col align-v="center">
          <p>
            A {{ activity.userLike }}
            {{ activity.description }}
            {{ activity.routineUserLiked }}
          </p>
        </b-col>
      </b-row>
    </b-row>
    <b-row v-if="!mobile">
      <b-col cols="12">
        <br>
        <br>
        <br>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'ActivityPost',
  data() {
    return {
      userActivity: {},
      userCreator: [],
      creatorImg: [],
      imageUrl: '',
    };
  },
  props: ['mobile'],
  async created() {
    this.$store.dispatch('activity/getByUsername', this.$route.params.name).then(
      (data) => {
        this.userActivity = data;
      },
      (error) => {
        console.log(`failed: ${error}`);
      },
    );
  },
  methods: {
    getImage(name, i) {
      this.$store.dispatch('user/getByUsername', name).then(
        (data) => {
          this.$store.dispatch('user/getUserImage', data._id).then( // eslint-disable-line
            (image) => {
              this.imageUrl = image.dataUrl;
              document.getElementById(`image${i}`).innerHTML = `<img
              class="img-fluid rounded-circle creator-img"
              src="${image.dataUrl}" />`;
            },
          );
        },
      );
    },
  },
};

</script>

<style>

p {
  font-size: 12px;
}

.comments p {
  margin-bottom: 0;
}

.routine-card {
  padding-right: 0;
}

.likes p {
  font-size: 10px;
  color: grey;
}

.routine-card p {
  margin-bottom: 0;
}

.estimated-time {
  font-size: 10px;
  color: grey;
}

.create-date {
  font-size: 10px;
  color: grey;
}

.title {
  font-size: 14px;
}

.creator-img {
  height: 34px;
  width: 34px;
}

.user-creator {
  text-align: right;
  margin-bottom: 0;
}

.creator-info {
  padding-right: 0;
}

@media screen and (min-width: 601px) {
  p {
    font-size: 20px;
  }
  .activity-info {
    margin-bottom: 2vh;
  }
  .create-date {
    font-size: 14px;
    color: grey;
  }
  .likes p {
    font-size: 14px;
    color: grey;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
  .title {
    font-size: 24px;
  }
  .activity-img {
    max-height: 400px;
  }
  .activity-description {
    margin-top: 2vh;
  }
  .estimated-time {
    font-size: 16px;
    color: grey;
    margin-top: 2vh;
  }
}

</style>
