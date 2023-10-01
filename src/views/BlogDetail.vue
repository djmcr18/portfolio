<template>
    <div class="blog-detail">
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.body"></div>
    </div>
    <button @click="backToBlogList">Back to Blog List</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();  // Add this for navigation functionality
const blogId = route.params.id;

const blog = ref({});

onMounted(async () => {
    const blogsFromStorage = JSON.parse(localStorage.getItem('blogs'));
    blog.value = blogsFromStorage.blogs.find(b => b.id === parseInt(blogId));
});

// Add this function for navigation functionality
const backToBlogList = () => {
    router.push({ name: 'BlogList' });
};
</script>

<style scoped>
/* You can style the detailed view here */
.blog-detail {
    padding: 20px;
}
</style>
