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
import { db } from "../data/firebase.js"; // Import the Firestore instance
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions

const route = useRoute();
const router = useRouter();
const blogId = route.params.id;

const blog = ref({});

onMounted(async () => {
    // Reference to the specific blog in Firestore
    const blogRef = doc(db, "blogs", blogId);
    
    // Fetch the blog details from Firestore
    const blogDoc = await getDoc(blogRef);
    if (blogDoc.exists()) {
        blog.value = blogDoc.data();
    }
});

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
