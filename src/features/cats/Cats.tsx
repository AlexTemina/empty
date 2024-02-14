import { useData } from '../../hooks/useData';

export default function Cats() {
  const catFacts = useData('https://cat-fact.herokuapp.com/facts');

  return (
    <ul className="cats-panel">
      {catFacts.map((j: any) => {
        return <li className="cats-panel__row">{j.text}</li>;
      })}
    </ul>
  );
}
