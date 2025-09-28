<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
// fake data
import JobListing from './JobListing.vue';
import { reactive, defineProps, onMounted } from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
import { ref } from 'vue';
import jobdata from '@/jobs.json';
import api from '@/api/axios';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// Reactive lưu object 
const state = reactive({
  jobs: [],
  isLoading: true,
});

// lấy job ra
const jobs = ref(jobdata)
console.log(jobs.value.jobs);
//// ✅ paginate state
const currentPage = ref(1)
const pageSize = 2 // số job mỗi trang

// computed danh sách job hiển thị theo trang
const paginatedJobs = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return state.jobs.slice(start, end)
})

// tổng số trang
const totalPages = computed(() => {
  return Math.ceil(state.jobs.length / pageSize)
})

onMounted(async () => {
  try {
      const response = await api.get('/jobs');
      state.jobs = response.data;
    // state.jobs = jobs.value.jobs;
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>

      <!-- Shoe job listing when done loading -->
      <div v-else = "staet.isLoading == false" class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in paginatedJobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
      <!-- Pagination controls -->
        <div class="flex justify-center mt-8 space-x-2">
          <button
            @click="currentPage--"
            :disabled="currentPage === 1"
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

           <!-- Page numbers -->
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            :class="[
              'px-3 py-1 rounded',
              currentPage === page
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            ]"
          >
            {{ page }}
          </button>

          <button
            @click="currentPage++"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>


    
</template>
