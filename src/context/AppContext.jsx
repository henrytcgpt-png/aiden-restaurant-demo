import { createContext, useContext, useReducer } from 'react'
import { branches } from '../data/branches'
import { siteConfig } from '../data/siteConfig'

const AppContext = createContext(null)

const initialState = {
  selectedBranch: branches[0],
  orderMode: siteConfig.defaultOrderMode,
  cart: [],
  isCartOpen: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_BRANCH':
      return { ...state, selectedBranch: action.payload }
    case 'SET_MODE':
      return { ...state, orderMode: action.payload }
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] }
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((_, i) => i !== action.payload) }
    case 'CLEAR_CART':
      return { ...state, cart: [] }
    case 'OPEN_CART':
      return { ...state, isCartOpen: true }
    case 'CLOSE_CART':
      return { ...state, isCartOpen: false }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
