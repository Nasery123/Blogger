<template>
    <div class="profile-page">
        <div class="container">
            <div class="row" v-if="profile">
                <div class="col-md-8">
                    <div>
                        <ProfileCard :profile="profile"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="row">
        <div class="col=md-8" v-for="b in blogs" :key="b.id">
            <BlogCard :blogProp="b"/>

        </div>
    </div>
</template>


<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import {profilesService} from '../services/ProfilesService.js'
import { blogService } from '../services/BlogService.js';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';

export default {

    setup(){
        const route = useRoute()

        async function getProfile(){
            try {
                await profilesService.getProfileById(route.params.id)
            } catch (error) {
                Pop.error(error)
            }
        }

        async function getBlogsByProfile() {
            try {
                await blogService.getBlogsByProfile(route.params.id)

            } catch (error) {
                Pop.error(error)

            }
        }
        onMounted(() => {
            getProfile()
            getBlogsByProfile()
        })
        return {
            profile: computed(() => AppState.activeProfile),
            blogs: computed(() => AppState.blogs)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
