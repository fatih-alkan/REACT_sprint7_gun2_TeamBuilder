import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const history = useHistory();

  const initialForm = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialForm);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get('https://6540a96145bedb25bfc247b4.mockapi.io/api/login')
      .then((response) => {
        const user = response.data.find(
          (u) => u.email === formData.email && u.password === formData.password
        );
        if (user) {
          history.push('/main');
        } else {
          history.push('/error');
        }
      })
      .catch((error) => {
        console.error('Login error:', error);
        history.push('/error');
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Sign In
      </Button>
    </Form>
  );
}
