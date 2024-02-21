import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    languageNB: sessionStorage.getItem('languageNebulaBlock') || 'en',
    contactShow: sessionStorage.getItem('contacteNebulaBlock') || false,
    accessToken: sessionStorage.getItem('access_token_nebulaBlock') || '',
    emailAddress: sessionStorage.getItem('email_address_nebulaBlock') || '',
    accessID: sessionStorage.getItem('access_id_nebulaBlock') || -1,
    accessName: sessionStorage.getItem('access_name_nebulaBlock') || '',
  },
  mutations: {
    SET_LANGUAGE: (state, languageNB) => {
      state.languageNB = languageNB
      sessionStorage.setItem('languageNebulaBlock', languageNB)
    },
    SET_CONTACTUS: (state, contactShow) => {
      state.contactShow = contactShow
      sessionStorage.setItem('contacteNebulaBlock', contactShow)
    },
    SET_ACCESSTOKEN: (state, accessToken) => {
      state.accessToken = accessToken
      sessionStorage.setItem('access_token_nebulaBlock', accessToken)
    },
    SET_EMAILADDRESS: (state, emailAddress) => {
      state.emailAddress = emailAddress
      sessionStorage.setItem('email_address_nebulaBlock', emailAddress)
    },
    SET_ACCESSID: (state, accessID) => {
      state.accessID = accessID
      sessionStorage.setItem('access_id_nebulaBlock', accessID)
    },
    SET_ACCESSNAME: (state, accessName) => {
      state.accessName = accessName
      sessionStorage.setItem('access_name_nebulaBlock', accessName)
    }
  },
  actions: {
    setLanguage({
      commit
    }, languageNB) {
      commit('SET_LANGUAGE', languageNB)
    },
    setContactUs({
      commit
    }, contactShow) {
      commit('SET_CONTACTUS', contactShow)
    },
    setAccessToken({
      commit
    }, accessToken) {
      commit('SET_ACCESSTOKEN', accessToken)
    },
    setEmailAddress({
      commit
    }, emailAddress) {
      commit('SET_EMAILADDRESS', emailAddress)
    },
    setAccessID({
      commit
    }, accessID) {
      commit('SET_ACCESSID', accessID)
    },
    setAccessName({
      commit
    }, accessName) {
      commit('SET_ACCESSNAME', accessName)
    },
  },
  modules: {}
})