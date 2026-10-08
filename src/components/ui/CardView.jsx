const CardView = ({ label, value, icon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 flex items-center justify-between">
      <div className="space-y-2">
        <p className="text-xs font-light text-text-primary uppercase">{label}</p>
        <p className="text-2xl font-light text-gray-900">{value}</p>
      </div>
      <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center">
        {icon}
      </div>
    </div>
  )
}
export default CardView;