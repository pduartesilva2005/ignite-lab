import { ArrowFatRight  } from "phosphor-react";

export function LoadingEvent() {
  return (
    <div className="my-auto mx-10 sm:mx-auto flex flex-col text-green-300 justify-center items-center gap-3">
      <ArrowFatRight size={100}/>
      <span className="text-center text-gray-200 text-3xl mt-2">Clique em alguma aula para começar o evento</span>
    </div>
  )
}
