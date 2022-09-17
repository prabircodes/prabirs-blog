import { Fragment } from 'react'
import MainVaigation from './main-navigation'

function Layout(props) {
  return (
    <Fragment>
      <MainVaigation />
      <main>{props.children}</main>
    </Fragment>
  )
}
export default Layout
