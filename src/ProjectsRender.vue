<template>
    <div class="flex flex-wrap justify-center md:justify-between mb-10 gap-16 md:gap-0 pr-12 pl-12">
        <div v-for="(project,index) in visibleProjects" :key="index">
            <ProjectsComponent  :data="project" class="w-30"/>
        </div>
    </div>
    <div class="flex gap-20 justify-center w-full font-testimonials">
        <button class="projects-button" v-if="hasMore" @click="loadMore"><h1>Show More</h1><font-awesome-icon icon="arrow-down" /></button>
        <button class="projects-button" v-if="hasLess" @click="loadLess"><h1>Show Less</h1><font-awesome-icon icon="fa-solid fa-arrow-up" /></button>
    </div>
</template>
<script>
import ProjectsComponent from './ProjectsComponent.vue';
const projects = require('./projects.json')
export default {
    components: {
        ProjectsComponent,
    },
    data() {
        return {
            projectsToRead:3,
            projects,
        }
    },
    methods:{
        loadMore() {
            this.projectsToRead+=3
        },
        loadLess() {
            this.projectsToRead-=3
        }
    },
    computed: {
        visibleProjects() {
            return this.projects.slice(0,this.projectsToRead)
        },
        hasMore() {
            return this.projectsToRead < this.projects.length;
        },
        hasLess() {
            return this.projectsToRead > 2;
        }
    }
}
</script>