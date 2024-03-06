
interface Props {
    params : { id: string };
}

export default function PokemonPage({ params }: Props) {
  return (
    <div>
      <h1>Welcome to Pokemon Page</h1>
    </div>
  );
}