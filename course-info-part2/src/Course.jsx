
const Header = ({name}) => {
    return(
      <h1>{name}</h1>
    )
}

const Sum = ({parts}) => {

  const sum = parts.reduce((prev,curr) => prev + curr.exercises,0)
  return (
    <>
    <p><strong>Total Exercises : {sum}</strong></p>
    </>
  )
}

const Part = ({value,exercises}) => {
    return (
      <p>{`${value} ${exercises}`}</p>
      
    )
}

const Content = ({parts}) => {
   return (
      <>
      {parts.map((part) => <Part key = {part.id} value = {part.name} exercises={part.exercises} />)}
      <Sum parts={parts} />
      </>
   )
}

const Body = ({name,parts}) => {
  return (
    <>
    <Header name = {name} />
    <Content parts = {parts} />
    </>
  )
}

const Course = ({course}) => {

  return ( 
     <>
      {
        course.map((c) => {
          return (
            <Body key = {c.id} name = {c.name} parts = {c.parts} /> 
          )
        })
      }
     </>
  )
}

export default Course;