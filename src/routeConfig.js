import DashBoardView from './view/DashboardView/DashboardView'
import PlansAndTasksView from './view/PlansAndTasksView/PlansAndTasksView'

export const routes = [
  {
    path: "/",
    component: DashBoardView
  },
  {
    path: "/plansandtasks",
    component: PlansAndTasksView
  }
]