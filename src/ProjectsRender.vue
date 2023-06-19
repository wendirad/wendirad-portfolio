<template>
    <div class="flex flex-col md:grid md:grid-cols-2 gap-5 m-10">
        <div v-for="(project,index) in projects" :key="index">
            <ProjectsComponent  :data="project" class="w-30"/>
        </div>
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
            projects
        }
    }
}
</script>