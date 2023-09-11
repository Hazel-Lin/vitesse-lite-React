function Hi() {
  const navigate = useNavigate()
  const props = useParams()

  const back = () => {
    navigate(-1)
  }
  return (
    <div>
    <div className="i-carbon-pedestrian inline-block text-4xl" />
    <p>
      Hi, { props.name }
    </p>
      <p className="text-sm op50">
      <em>Dynamic route!</em>
    </p>

    <div>
        <button className="m-3 mt-8 text-sm btn" onClick={() => back()}>
        Back
      </button>
    </div>
  </div>
  )
}

export default Hi
