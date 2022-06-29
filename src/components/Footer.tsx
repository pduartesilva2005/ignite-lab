import { LogoRocket } from './LogoRocket';

export function Footer() {
  return (
    <footer className="flex flex-col py-5 md:flex-row text-center items-center justify-between w-full border-t border-gray-500 text-gray-300">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <LogoRocket />

        <p>Rocketseat - Todos os diretos reservados</p>
      </div>

      <p>Políticas de privacidade</p>
    </footer>
  )
}