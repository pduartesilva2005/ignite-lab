import { Spinner } from 'phosphor-react';

interface PropsIconLoading {
  size: number;
}

export function IconLoading(props: PropsIconLoading) {
  return (
    <Spinner color="#fff" weight="duotone" size={props.size}>
      <animate
        attributeName="opacity"
        values="0;1;0"
        dur="3s"
        repeatCount="indefinite"
      ></animate>

      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        dur="3s"
        from="0 0 0"
        to="360 0 0"
        repeatCount="indefinite"
      ></animateTransform>
    </Spinner>
  );
}
