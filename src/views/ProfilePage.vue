<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 my-5">
        <Suspense>
          <ProfileSideBar />
        </Suspense>
      </div>
      <div class="col-md-9 my-5">
        <Suspense>
          <ProfileContent />
        </Suspense>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSideBar from '@/components/profile/ProfileSideBar';
import ProfileContent from '@/components/profile/ProfileContent';
export default {
  name: 'ProfilePage',
  components: {
    ProfileSideBar,
    ProfileContent,
  },
}
</script>

<style>
</style>