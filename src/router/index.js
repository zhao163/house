import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import FamilyService from '@/components/FamilyService'
import CompanyCulture from '@/components/companyCulture'
import AboutUs from '@/components/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/familyService',
      name: 'familyService',
      component: FamilyService
    },
    {
      path: '/companyCulture',
      name: 'companyCulture',
      component: CompanyCulture
    }
  ]
})
