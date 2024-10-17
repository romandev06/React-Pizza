import { createRoot } from 'react-dom/client'
import App from './App'
import './scss/App.css'

import { BrowserRouter as Router } from "react-router-dom"

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

const rootElem = document.getElementById('root')

if (rootElem) {
    createRoot(rootElem).render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
}
