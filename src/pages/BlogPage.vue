<template>
<div class="container-fluid">
    <div class="row">
        <div class="" v-for="blog in blogs" :key="blog.id">
            <BlogCard :blogProp="blog" />

        </div>
    </div>
</div>


</template>


<script>
import { onMounted } from 'vue';
import { blogService } from '../services/BlogService.js';
import Pop from '../utils/Pop.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
    // components:{BlogCard},
    setup(){
        async function getBlogs(){
            try {
                await blogService.getBlogs()

            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => {
            getBlogs()
        })
        return {
            blogs: computed(() => AppState.blogs)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
