import DashBoardView from './view/DashboardView/DashboardView'
import PlansAndTasksView from './view/PlansAndTasksView/PlansAndTasksView'
import BudgetView from './view/BudgetView/BudgetView'
import GoalView from './view/GoalView/GoalView'
import UserSettingsView from './view/UserSettingsView/UserSettingsView'
import AppSettingsView from './view/AppSettingsView/AppSettingsView'

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
  },
  {
    path: "/goals",
    component: GoalView
  },
  {
    path: "/user",
    component: UserSettingsView
  },
  {
    path: "/appsettings",
    component: AppSettingsView
  }
]