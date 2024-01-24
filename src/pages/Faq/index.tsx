import { Header, Message } from 'semantic-ui-react';

function Faq() {
  return (
    <Message>
      <Header as="h2">FAQ</Header>
      <Message.Header>A quoi ça sert ?</Message.Header>
      <p>
        Cette application permet de trouver une liste de
        dépôts GitHub pour un critère donné.
      </p>
      <Message.Header>Comment faire une recherche ?</Message.Header>
      <p>Sur la page recherche, complétez le champ de recherche et valider la recherche.</p>
      <Message.Header>Puis-je chercher n&apos;importe quel terme ?</Message.Header>
      <p>Oui, c&apos;est fou.</p>

    </Message>
  );
}

export default Faq;
