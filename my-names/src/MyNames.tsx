type Props = {
  name: string;
}

const MyNames: React.FC<Props> = (props) => {
  const { name } = props;

  return <div>{name}</div>;
}

export default MyNames;