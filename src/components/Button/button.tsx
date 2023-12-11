import { HTMLAttributes } from 'react';
import style from './button.module.scss';

export default function Button({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={[className ?? '', style.root].join(' ')} />
  );
}
