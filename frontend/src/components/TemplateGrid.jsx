import { templates } from "../assets/assets"

// eslint-disable-next-line react/prop-types
const TemplateGrid = ({onTemplateClick}) => {
  return (
   <div className="row g-3">
  {templates.map(({ id, label, image }) => (
    <div className="col-12 col-sm-6 col-lg-4" key={id}>
      <div className="border rounded shadow-sm overflow-hidden template-hover cursor-pointer" 
      title={label}
      onClick={() => onTemplateClick(id)}
      >
        <div className="template-image-wrapper">
          <img src={image} alt={label} className="template-image" loading="lazy" />
        </div>
        <div className="p-2 text-center fw-medium">{label}</div>
      </div>
    </div>
  ))}
</div>

  )
}

export default TemplateGrid