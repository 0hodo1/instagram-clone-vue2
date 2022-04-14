<template>
  <div class="home">
    <nav>
      <router-link to="/profile">Post</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">Save</router-link> |
      <router-link to="/profile/tag">Tag</router-link>
    </nav>
    <CustomText tag="h1">Profile</CustomText>
    <router-view />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";

export default {
  name: "ProfileView",
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.a1 {
  color: rgba(var(--ba8), 0.5);
}
.a2 {
  color: rgb(var(--b3f));
}
.a3 {
  color: rgb(var(--ba8));
}
</style>
