<template>
    <b-container
      class="text-center my-4 px-0">
      <b-row id="nav-header " class="pt-4">
        <b-col cols=4 class="ps-0">
          <b-button
          size="lg"
          class="b-link"
          to="/user"
          variant="link">Cancel</b-button>
        </b-col>
        <b-col cols=4
        class="p-1">
          <b-img
          id="picture"
          src="https://images.unsplash.com/photo-1541911087797-f89237bd95d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          fluid
          rounded="circle"
          class="img-limit"
          alt="profile picture"
        ></b-img>
        </b-col>
        <b-col cols=4 class="pe-2">
          <b-button
          class="px-4"
          variant="primary">Done</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-form>
         <b-form-file v-model="file" ref="file-input" class="mb-2"></b-form-file>
        </b-form>
      </b-row>
    </b-container>
</template>
