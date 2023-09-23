export default function Divider() {
    return (
      <div className="relative">
        <div className="absolute px-16 inset-0 flex items-center" aria-hidden="true">
          <div className="w-full  border-t border-gray-300" />
        </div>
      </div>
    )
  }