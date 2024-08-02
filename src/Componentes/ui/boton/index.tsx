import style from "./Boton.module.css";

interface Props {
  label: string;
}

export const BotonComponente = ({label}: Props) => {
  return (
    <div className={style.Boton}>
      <button>{label}</button>
    </div>
  );
};
