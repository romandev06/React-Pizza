import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './scss/App.css'

import { BrowserRouter as Router } from "react-router-dom"

import { store } from './redux/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
