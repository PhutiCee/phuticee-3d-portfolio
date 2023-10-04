import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import styled from 'styled-components';
import Map from './Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media only screen and (max-width: 768px) {
       justify-content: center;
    }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 10px;

  @media only screen and (max-width: 768px) {
        width: 350px;
    }
`;

const Input = styled.input`
  padding: 15px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 15px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #da4ea2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 14px;
`;
const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
        display: none;
    }
`;

function Contacts() {
  const form = useRef();
const [success,setSuccess] = useState(null);

const handleSubmit = e => {
  e.preventDefault()

  emailjs.sendForm('service_cd512z6', 'template_1ra7cuh', form.current, 'a0qIWMzjAP7Xptk3z')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
      }, (error) => {
          console.log(error.text);
          setSuccess(false);
      });
}

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            {success && "Email Sent Successfully! We will get back to you."}
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='name' />
            <Input placeholder='Email' name='email' />
            <TextArea rows={6} name='message' placeholder='Message' />
            <Button type='submit'>Send</Button>
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contacts