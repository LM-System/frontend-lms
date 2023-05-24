import Navbar from './Navbar/Navbar'
import Section from './Section/Section'
import './Main.css'
export default function Main(props) {
  return (
    <main className={`${!props.isSidebarVisible ? '' : 'full-width'}`}>
      <Navbar
      setSidebarVisibility={props.setSidebarVisibility}
      isSidebarVisible={props.isSidebarVisible}
      setIsLogin={props.setIsLogin}
      darkMode={props.darkMode}
      darkModeToggle={props.darkModeToggle}/>
      <Section isSidebarVisible={props.isSidebarVisible}/>
    </main>
  )
}