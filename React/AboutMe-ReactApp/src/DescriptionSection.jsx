import './App.css'

function DescriptionSection({ nameOfClass, hContent, textBoxContent }) {

  return (
        <section className={nameOfClass}>
          <h2>{hContent}</h2>
          <div className="text-box">
            {textBoxContent}
          </div>
        </section>
  )
}

export default DescriptionSection
