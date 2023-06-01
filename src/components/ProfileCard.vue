<template>
    <div class="card">
        <div class="card-body">

            <div class="blog-card mb-2 text-center">
                <p class="text-center">
                    <img class="profileImg" :src="profile.picture" :alt="profile.name">


                    </p>

                </div>
                <p><b>{{ profile.name }}</b></p>
            </div>
        </div>



</template>


<script>

import { computed } from '@vue/reactivity';
import { Account } from '../models/Account.js';
import { Profile } from '../models/Profile.js';
import { Blog } from '../models/Blog.js';

export default {
    props:{
        profile:{type:[Profile,Account], required:true}
    },
    setup(){
        return {
            coverImg: computed(() => `url(${props.profile?.coverImg})`)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
