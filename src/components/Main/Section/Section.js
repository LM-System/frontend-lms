import './Section.css'

export default function Section(props) {
  return (
    <section className={`${!props.isSidebarVisible ? '' : 'full-width'}`}> 
      {/* hi from Section */}
    </section>
  )
}