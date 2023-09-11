function TheInput() {
  return (
    <input
      id="input"
      modelValue={name}
      type="text"
      placeholder="What's your name?"
      className="outline-active:none w-250px border border-dark:gray-700 border-gray-200 border-rounded bg-transparent px-4 py-2 text-center outline-none"
    />
  )
}
export default TheInput
