import { Suspense } from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import TheFooter from '~/components/TheFooter'
import routes from '~react-pages'

function Routes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}
function App() {
  return (
    <main className="px-4 py-10 text-center font-sans text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
      <TheFooter />
    </main>
  )
}

export default App
