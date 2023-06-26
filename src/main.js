
import { createApp } from 'vue'
import TestimonialsWonde from './TestimonialsWonde.vue'
import ProjectsRender from './ProjectsRender'
import MyServices from './MyServices.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowDown,faArrowUp} from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown,faArrowUp)
import 'aos/dist/aos.css'
import './assets/tailwind.css'

createApp(TestimonialsWonde).mount('#testimonials')
createApp(ProjectsRender).component('font-awesome-icon',FontAwesomeIcon).mount('#projects')
createApp(MyServices).mount("#services")
