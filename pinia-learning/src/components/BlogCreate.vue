<template>
    <form @submit.prevent="addNewBlog">
        <div class="mb-2">
            <input type="text" v-model="newTitle" class="form-control" placeholder="title" required>
        </div>
        <div class="mb-2">
            <textarea rows="4" v-model="newContent" class="form-control" placeholder="content" required></textarea>
        </div>
        <div class="clearfix">
            <button class="btn btn-primary btn-sm float-end">Add Blog</button>
        </div>
    </form>
</template>

<script setup>
    import { ref } from "vue";
    import { useBlogStore } from "../stores/BlogStore"
    const blogStore = useBlogStore()
    let newTitle = ref('')
    let newContent = ref('')
    function addNewBlog(){
        const newBlog = {
            id: Math.floor(Math.random() * 1000),
            title: newTitle.value,
            content: newContent.value
        }
        blogStore.addBlog(newBlog)
        // clear the form
        newTitle.value = ''
        newContent.value = ''
    }
</script>