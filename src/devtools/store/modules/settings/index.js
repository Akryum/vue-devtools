const state = {
  activeEntry: 'general',
  density: 'normal'
}

const mutations = {
  SWITCH_ENTRY (state, entry) {
    state.activeEntry = entry
  },
  SET_DENSITY (state, density) {
    state.density = density
  }
}

export default {
  state,
  mutations
}
