import { useState } from 'react';
import { Form, Input, Segment } from 'semantic-ui-react';

interface SearchBarProps {
  onSubmitSearch: (searchText: string) => void;
}
function SearchBar({ onSubmitSearch }: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
  };

  const handleSubmitForm = () => {
    // Semantic UI fait tout seul un preventDefault pour éviter de recharger la page
    // Pas besoin de le faire nous même
    // Lorsque le formulaire est soumis, j'appel la fonction qui me sera
    // passée dans la props onSubmitSearch en lui fournissant la valeur de la recherche
    onSubmitSearch(searchText);
  };

  return (
    <Segment>
      <Form onSubmit={handleSubmitForm}>
        <Form.Field>
          <Input
            autoFocus
            placeholder="Search..."
            icon="search"
            iconPosition="left"
            value={searchText}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default SearchBar;
