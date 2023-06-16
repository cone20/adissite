import {createWebHistory, createRouter} from "vue-router";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import Work from "@/components/work/Work";


const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/work",
    components: Work,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
