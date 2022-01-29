<template>
  <b-row>
    <b-col md="6">
      <div class="imgUser">
        <img :src="arg.imgURL">
      </div>
      <div class="title">
        {{arg.username}}
      </div>
      <div class="valoration">
        {{arg.valoration}}
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    arg: {
      username: String,
      imgURL: String,
      valoration: Number,
    },
  },
};
</script>

<style scoped>
.username {
  font-size: 30px;
  height: 10%;
  margin-top: 5px;
  display: block;
}

.imgUser {
  height: 68%;
  margin: 10px auto;
}

.imgUser img {
  border-radius: 20px;
  border: solid 2px black;
  height: 98%;
  width: 60%;
}

.valoration {
  width: 55%;
  margin-left: 41%;
  margin-bottom: 5px;
  display: flex;
  height: 10%;
  justify-content: space-between;
  font-size: 30px;
  font-weight: bold;
}
</style>
