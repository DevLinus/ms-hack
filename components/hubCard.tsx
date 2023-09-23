interface MainCardProp {
    title: string
    text: string
    icon: React.ReactNode
  }
export default function hubCard(props:MainCardProp) {

    return (
      <div className="bg-white h-auto px-6 py-20 sm:py-32 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
        <div className="flex justify-center space-x-3">
        {props.icon}<h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{props.title}</h2>
        </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {props.text}
          </p>
        </div>
      </div>
    )
  }
  