type Props = {
  name: string;
}

export const MyNames: React.FC<Props> = (props) => {
  const { name } = props;

  return <div>{name}</div>;
}
