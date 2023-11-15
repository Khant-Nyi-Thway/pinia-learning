<template>
    <div class="card my-2">
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5>{{ blog.title }}</h5>
                <span class="text-danger" role="button" @click="blogStore.deleteBlog(blog.id)">
                    <i class="bi bi-trash"></i>
                </span>
            </div>
            <p>{{ blog.content }}</p>
        </div>
    </div>
</template>

<script setup>
    import { defineProps } from 'vue'
    import { useBlogStore } from '../stores/BlogStore';
    // defineProps({
    //     blog:object
    // })
    const props = defineProps(['blog']);
    const blogStore = useBlogStore()
</script>