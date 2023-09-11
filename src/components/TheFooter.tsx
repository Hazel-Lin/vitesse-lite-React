import { useDark } from '~/hooks'

function TheFooter() {
  const { isDark, toggleDark } = useDark()
  return (
    <nav className="mt-6 inline-flex gap-2 text-xl">
      <button className="icon-btn !outline-none" onClick={() => toggleDark()}>
        {isDark ? <div className="i-carbon-sun" /> : <div className="i-carbon-moon" /> }
    </button>
    <a
      className="i-carbon-logo-github icon-btn"
      rel="noreferrer"
      href="https://github.com/antfu/vitesse-lite"
      target="_blank"
      title="GitHub"
    />
  </nav>
  )
}
export default TheFooter
