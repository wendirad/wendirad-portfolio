<template>
    <div class="flex flex-col md:grid md:grid-cols-2 gap-5 m-10">
        <div v-for="(project,index) in visibleProjects" :key="index">
            <ProjectsComponent  :data="project" class="w-30"/>
        </div>
    </div>
    <div class="flex gap-20 justify-center w-full">
        <button class="bg-slate-300 p-5 rounded-md" v-if="hasMore" @click="loadMore">Show More</button>
        <button class="bg-slate-300 p-5 rounded-md" v-if="hasLess" @click="loadLess">Show Less</button>
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
            projectsToRead:4,
            projects,
        }
    },
    methods:{
        loadMore() {
            this.projectsToRead+=4
        },
        loadLess() {
            this.projectsToRead-=4
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
            return this.projectsToRead > 4;
        }
    }
}
</script>