import './Section.css'
import MainContent from './MainContent/MainContent'

export default function Section(props) {
  return (
    <section className={`${!props.isSidebarVisible ? '' : 'full-width'}`}>
      <div className='full-section'>
        <MainContent
          sidebarOptions={props.sidebarOptions}
          selectedOption={props.selectedOption}/>
      </div>
    </section>
  )
}