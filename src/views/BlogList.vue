<template>
    <div class="blog-list">
        <!-- Title for Blog Page -->
        <div class="blog-title-container">
            <h1 class="blog-title">Task Reflections Blog</h1>
        </div>

        <div class="blog-container">
            <div v-for="blog in blogs" :key="blog.id" class="blog-item">
                <h3>{{ blog.title }}</h3>
                <div v-html="truncatedBody(blog.body)"></div>
                <router-link :to="`/blogs/${blog.id}`">Read More</router-link>
                <!-- Admin Functionalities -->
                <div v-if="isAdminLoggedIn">
                    <button @click="editBlog(blog.id)">Edit</button>
                    <button @click="deleteBlog(blog.id)">Delete</button>
                    <button @click="addBlog">Add New Blog</button>
                </div>
            </div>
        </div>
        
        <!-- Add New Blog Modal -->
        <div v-if="showAddBlogModal">
            <div class="modal-backdrop" @click="showAddBlogModal = false"></div>
            <div class="modal">
                <h2 class="edit-blog-title">Add New Blog</h2>
                <div class="input-group">
                    <label for="add-blog-title">Title:</label>
                    <input id="add-blog-title" v-model="newBlog.title" placeholder="Blog Title">
                </div>
                <div class="input-group">
                    <label for="add-blog-body">Body:</label>
                    <textarea id="add-blog-body" v-model="newBlog.body" placeholder="Blog Content"></textarea>
                </div>
                <div class="modal-buttons">
                    <button @click="saveNewBlog">Save</button>
                    <button @click="showAddBlogModal = false">Cancel</button>
                </div>
            </div>
        </div>


        <!-- Edit Blog Modal -->
        <div v-if="showEditBlogModal">
            <div class="modal-backdrop" @click="closeEditModal"></div>
            <div class="modal">
                <h2 class="edit-blog-title">Edit Blog</h2>
                <div class="input-group">
                    <label for="blog-title">Title:</label>
                    <input id="blog-title" v-model="editedBlog.title" placeholder="Blog Title">
                </div>
                <div class="input-group">
                    <label for="blog-body">Body:</label>
                    <textarea id="blog-body" v-model="editedBlog.body" placeholder="Blog Content"></textarea>
                </div>
                <div class="modal-buttons">
                    <button @click="saveEditedBlog">Save Changes</button>
                    <button @click="closeEditModal">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { db } from "../data/firebase.js";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const blogs = ref([]);
const isAdminLoggedIn = ref(localStorage.getItem('isLoggedIn') === 'true');
const editedBlog = ref(null);
const showEditBlogModal = ref(false);

const truncatedBody = (body) => {
  return body.length > 200 ? body.substring(0, 200) + '...' : body;
};

const fetchBlogs = async () => {
    const blogsCollection = collection(db, "blogs");
    const blogsSnapshot = await getDocs(blogsCollection);
    return blogsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};


onMounted(async () => {
    blogs.value = await fetchBlogs();
});

const editBlog = (id) => {
    const blogToEdit = blogs.value.find(blog => blog.id === id);
    editedBlog.value = { ...blogToEdit };
    showEditBlogModal.value = true;
};

const saveEditedBlog = async () => {
    if (editedBlog.value.id) {
        const blogRef = doc(db, "blogs", editedBlog.value.id);
        await updateDoc(blogRef, {
            title: editedBlog.value.title, 
            body: editedBlog.value.body 
        });
        blogs.value = await fetchBlogs();
        editedBlog.value = null;
        showEditBlogModal.value = false;
    }
};

const closeEditModal = () => {
    showEditBlogModal.value = false;
    editedBlog.value = null;
};

const deleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
        const blogRef = doc(db, "blogs", id);
        await deleteDoc(blogRef);
        blogs.value = blogs.value.filter(blog => blog.id !== id);
    }
};

const showAddBlogModal = ref(false);
const newBlog = ref({
    title: "",
    body: ""
});

const addBlog = () => {
    showAddBlogModal.value = true;
};

const saveNewBlog = async () => {
    if (newBlog.value.title && newBlog.value.body) {
        await addDoc(collection(db, "blogs"), {
            title: newBlog.value.title, 
            body: newBlog.value.body 
        });
        blogs.value = await fetchBlogs();
        showAddBlogModal.value = false;
    }
};

</script>



<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    z-index: 1000;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    padding: 25px 20px;
}

.edit-blog-title {
    text-align: center;
    margin-bottom: 20px;
}

.input-group {
    margin: 10px 0;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
}

.input-group textarea {
    width: 100%;
    min-height: 150px;
    padding: 10px;
    box-sizing: border-box;
    font-family: inherit; /* Ensure the font is consistent */
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical; /* Allow vertical resize only */
}

.input-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-family: inherit;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.blog-container {
    max-width: 800px; /* Set a max-width for readability */
    margin: 0 auto;  /* This centers the container horizontally */
    padding: 30px;   /* Add some spacing around the container */
    background-color: #f9f9f9; /* A light background for contrast */
    border-radius: 5px; /* Slightly rounded corners */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* A subtle shadow for depth */
}

.blog-item {
    margin-bottom: 50px;  /* Spacing between blog items */
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); /* Add a faint line break */
    padding-bottom: 20px; /* Add some padding to space out the line from the content */
    margin-top: 25px; /* Adjust the top margin of each blog item */
}

.blog-item h3 {
    text-align: center; /* Center the blog post titles */
    margin-top: 0; /* Ensures the top spacing is consistent */
}

.blog-item:last-child {
    margin-bottom: 0;  /* Removes the margin from the last blog item for cleaner spacing */
}

.blog-title-container {
        color: #fff;
        text-align: center;
        margin-bottom: 40px;  /* Separate the title from the blog content */
    }

    /* Responsive adjustments for different screen sizes */
    @media (max-width: 768px) {
        .blog-title {
            font-size: 5vw;  /* Slightly larger font size for medium screens */
        }
    }

</style>