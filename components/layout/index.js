import Header from "./header"
export default function Layout(props) {
  return (<>
    <Header { ...props } ></Header>
    { props.children }
  </>
  )
}
