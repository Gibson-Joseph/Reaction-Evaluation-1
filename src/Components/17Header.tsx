interface IProps {
  name: string;
}

export default function Header(props: IProps) {
  return (
    <div>
      <header>
        <p>Current User:{props.name}</p>
      </header>
    </div>
  );
}
