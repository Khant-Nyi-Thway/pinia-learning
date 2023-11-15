import { defineStore } from "pinia";
import { ref } from "vue";

export const useBlogStore = defineStore('blogStore', () => {
    const blogs = ref([
        {
            id: 1,
            title: "What is Pinia?",
            content: "This is content one."
        },
        {
            id: 2,
            title: "What is Vue3?",
            content: "This is content two."
        }
    ])
    function addBlog(formData) {
        blogs.value.push(formData)
    }
    function  deleteBlog(id) {
        blogs.value = blogs.value.filter(blog => blog.id != id)
    }
    return { blogs, addBlog, deleteBlog }
})