import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }
  .form3 {
    width: 50%;
    max-width: 50%;
  }
  .form3-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form3-row {
    margin-bottom: 0;
  }
  .form3-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .form2 {
    max-width: 600px;
    // min-width: 300px;
    border-top: 5px solid var(--primary-500);
  }
  h3 {
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`
export default Wrapper
