import { constantRoutes } from '@/router'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

const state = {
  routes: []
}

const mutations = {
  INIT_ROUTES: (state) => {
    state.routes = [...constantRoutes]
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
