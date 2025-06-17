import { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import axios from 'axios';

export default function FormContainer({ addUser }) {
  const initialForm = { name: '', project: '', task: '' };
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://reqres.in/api/users', formData)
      .then((response) => {
        if (response.status === 201) {
          addUser(response.data);
          setFormData(initialForm);
        }
      })
      .catch((err) => {
        console.error('Kayıt başarısız:', err);
      });
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="p-3 border rounded shadow-sm bg-white"
    >
      <FormGroup>
        <Label for="name">Ad Soyad:</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Çalışanın tam adı ve soyadı"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="eposta">Email</Label>
        <Input
          id="eposta"
          name="eposta"
          type="email"
          placeholder="Kurumsal email adresi"
          value={formData.project}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="departman">Departman</Label>
        <Input
          id="departman"
          name="departman"
          type="text"
          placeholder="Çalıştığı departman"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="unvan">Ünvan</Label>
        <Input
          id="unvan"
          name="unvan"
          type="text"
          placeholder="Çalışanın Ünvanı"
          value={formData.task}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="gorev">Takım içi Görevleri:</Label>
        <Input
          id="gorev"
          name="gorev"
          type="textarea"
          placeholder="Çalışanın takım içerisindeki görev listesi"
          value={formData.name}
          onChange={handleChange}
        />
      </FormGroup>
      <Button color="primary" type="submit" block>
        Kaydet
      </Button>
    </Form>
  );
}
