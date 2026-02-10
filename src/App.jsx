function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>
}

function App() {
  return (
    <div>
      <Greeting name="Your Actual Name" />
      <Greeting name="Frontend Developer" />
      <Greeting name="React Learner" />
    </div>
  )
}

export default App