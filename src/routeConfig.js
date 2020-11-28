import DashBoardView from './view/DashboardView/DashboardView'
import PlansAndTasksView from './view/PlansAndTasksView/PlansAndTasksView'
import BudgetView from './view/BudgetView/BudgetView'

export const routes = [
  {
    path: "/",
    component: DashBoardView
  },
  {
    path: "/plansandtasks",
    component: PlansAndTasksView
  },
  {
    path: "/budget",
    component: BudgetView
  }
]