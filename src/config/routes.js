import Login from '../page/login/login.vue'
import NotFoundComponent from '../page/404/404.vue'
import main from '../page/main.vue'
import home from '../page/main.home.vue'
import userSpace from '../page/main.userSpace.vue'
import live from '../page/main.live.vue'
import lesson from '../page/main.lesson.vue'

import onlineCourse from '../page/lesson/lesson.onlineCourse.vue'
import classCurriculum from '../page/lesson/lesson.classCurriculum.vue'
import qualityCourse from '../page/lesson/lesson.qualityCourse.vue'

import teaching from '../page/main.teaching.vue'
import application from '../page/main.application.vue'

import recordApplication from '../page/application/application.record.vue'
import teachApplication from '../page/application/application.teach.vue'
import manageApplication from '../page/application/application.manage.vue'

import systemSetting from '../page/application/systemSet/system.main.vue'

import systemOrganization from '../page/application/systemSet/system.organization.vue'
import systemRole from '../page/application/systemSet/system.role.vue'
import systemStudent from '../page/application/systemSet/system.student.vue'
import systemTeacher from '../page/application/systemSet/system.teacher.vue'
import systemClass from '../page/application/systemSet/system.class.vue'

export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        component: NotFoundComponent
    },
    {
        path: '/',
        redirect: '/login',
        component: main,
        children: [
            {
                path: 'home',
                component: home
            },
            {
                path: 'userSpace',
                component: userSpace
            },
            {
                path: 'live',
                component: live
            },
            {
                path: 'lesson',
                redirect: 'lesson/onlineCourse',
                component: lesson,
                children: [
                    {
                        path:'onlineCourse',
                        component: onlineCourse
                    },{
                        path:'classCurriculum',
                        component: classCurriculum
                    },{
                        path:'qualityCourse',
                        component: qualityCourse
                    }
                ]
            },
            {
                path: 'teaching',
                component: teaching
            },
            {
                path: 'application',
                redirect: 'application/manage',
                component: application,
                children:[
                    {
                        path:'record',
                        component:recordApplication
                    },
                    {
                        path:'teach',
                        component:teachApplication
                    },
                    {
                        path:'manage',
                        component:manageApplication
                    }
                ]
            },
            {
                path: 'application/system',
                component: systemSetting,
                redirect: 'application/system/organization',
                children:[
                    {
                        path:'organization',
                        component:systemOrganization
                    },
                    {
                        path:'role',
                        component:systemRole
                    },
                    {
                        path:'student',
                        component:systemStudent
                    },
                    {
                        path:'teacher',
                        component:systemTeacher
                    },
                    {
                        path:'class',
                        component:systemClass
                    }
                ]
            },
        ],
    }
]
