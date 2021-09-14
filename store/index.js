const state = () => ({
  _alertDialog: {
    show: false,
    title: '',
    content: '',
    iconSet: '',
    iconName: '',
    type: '',
  },
})

const getters = {
  alertDialog: (state) => state._alertDialog,
}

const actions = {
}

const mutations = {
  fireAlertDialog(state, { title, content, iconSet, iconName, type }) {
    state._alertDialog.title = title
    state._alertDialog.content = content
    state._alertDialog.iconSet = iconSet
    state._alertDialog.iconName = iconName
    state._alertDialog.type = type
    state._alertDialog.show = true
  },
  closeAlertDialog(state) {
    state._alertDialog.title = ''
    state._alertDialog.content = ''
    state._alertDialog.iconSet = ''
    state._alertDialog.iconName = ''
    state._alertDialog.type = ''
    state._alertDialog.show = false
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}