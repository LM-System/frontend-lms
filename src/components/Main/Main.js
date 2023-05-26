import Navbar from './Navbar/Navbar'
import Section from './Section/Section'
import './Main.css'
export default function Main(props) {
  return (
    <main className={`${!props.isSidebarVisible ? '' : 'full-width'}`}>
      <Navbar
        sidebarToggle={props.sidebarToggle}
        isSidebarVisible={props.isSidebarVisible}
        darkMode={props.darkMode}
        darkModeToggle={props.darkModeToggle}
        setIsLogin={props.setIsLogin}/>
      <Section
        isSidebarVisible={props.isSidebarVisible}
        sidebarOptions={props.sidebarOptions}
        selectedOption={props.selectedOption}/>
    </main>
  )
}