import { DiscordLogo, Lightning } from 'phosphor-react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  href: string;
}

export function Button(props: ButtonProps) {
  return (
    <>
      {props.type === 'primary' ? (
        <a
          href={props.href}
          className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors"
        >
          <DiscordLogo size={24} />
          Comunidade do discord
        </a>
      ) : (
        <a
          href={props.href}
          className="p-4 text-sm flex border border-blue-500 text-blue-500 items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
        >
          <Lightning size={24} />
          Acesse o desafio
        </a>
      )}
    </>
  )
}