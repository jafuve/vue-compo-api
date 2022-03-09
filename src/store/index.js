import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    todos: [
      { id: '1', text: 'Collect all infinity stones', completed: false },
      { id: '2', text: 'Soule stone', completed: true },
      { id: '3', text: 'Power stone', completed: true },
      { id: '4', text: 'Reallity stone', completed: false },
      { id: '5', text: 'Get new allies', completed: false },
    ]
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter(todo => todo.completed === false)
    },
    allTodos(state, getters, rootState){
      return state.todos
    },
    completedTodos(state, getters, rootState){
      return state.todos.filter(todo => todo.completed)
    },
    getTodosByTab: ( _, getters) => ( tab ) => {
      switch(tab){
        case 'all': return getters.allTodos
        case 'pending' : return getters.pendingTodos
        case 'completed' : return getters.completedTodos
      }
    }
  },
  mutations: {
    toggleTodo( state, id ) {
      const todoIdx = state.todos.findIndex( todo => todo.id === id )
      state.todos[todoIdx].completed = !state.todos[todoIdx].completed
    },
    createTodo(state, text = ''){
      if(text.length <= 1 ) return

      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })

    }
  },
  actions: {
  },
  modules: {
  }
})
