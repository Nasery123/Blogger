<template>
<div class="rounded elevation-5 my-3">
    <img class="img-fluid rounded-top" @click="setActiveBlog" :src="blogProp.imgUrl" alt="">

    <div class="p-2">
        <h1>{{ blogProp.title }}</h1>
        <div class="d-flex justify-conted-between align-items-center">
            <p>{{ blogProp.body }}</p>

        </div>
        <div class="d-flex">
            <router-link :to="{name: 'Profile', params: { id: blogProp.creatorId}}">
            <img class="rounded-circle profile-image" :src="blogProp.creator.picture" alt="">
            <p class="px-3 pt-3">{{ blogProp.creator.name }}</p>
            </router-link>

        </div>
    </div>
</div>
</template>


<script>
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';
import { logger } from '../utils/Logger.js';

export default {
    props:{
        blogProp: {type: Blog, required:true}

    },
    setup(props){
        return {
            setActiveBlog() {
                AppState.activeBlog = props.blogProp
                logger.log ('[props.blog]', props.blogProp)
                logger.log('[stuff and things]', AppState.activeBlog)
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.profile-image{
    height: 60px;
    aspect-ratio: 1/1;
    object-fit: contain;
}

</style>
