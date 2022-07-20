interface IProps {
  name: string;
}

export default function Body(props: IProps) {
  return (
    <div>
      <h1>Welcome back, {props.name}</h1>
    </div>
  );
}
