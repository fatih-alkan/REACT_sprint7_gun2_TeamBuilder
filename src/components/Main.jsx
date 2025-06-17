import FormContainer from './FormContainer';

export default function Main({ addUser }) {
  return (
    <div className="products-container">
      <FormContainer addUser={addUser} />
    </div>
  );
}
