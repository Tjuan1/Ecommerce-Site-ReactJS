import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return <Wrapper>
    <div className="section-center">
      <h3>Interested? Join our newsletter</h3>
      <div className="content">
        <form className="contact-form">
              <input type="email" 
              className="form-input" 
              placeholder="enter email"/>
              <button type="submit" className="submit-btn">Subscribe</button>
        </form>
      </div>
    </div>
  </Wrapper>
}
const Wrapper = styled.section`
  padding: 5rem 0;
  justify-content: center;
  width: 100%;
  display: flex;
  h3 {
    text-transform: none;
    color: var(--clr-primary-2);
    text-align: center;
  }
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }

  .content{
    width: 80%;
    display: flex;
    margin: auto;
  }

  .contact-form {
    width: 80vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {

    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-primary-10);
  }
  .form-input {
    width: 50vw;
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-10);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 1rem 0;
  }
`

export default Contact
