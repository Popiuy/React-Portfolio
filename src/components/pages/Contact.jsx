import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    if (inputType === 'email') {
      setEmailTouched(true);
    } else if (inputType === 'name') {
      setNameTouched(true);
    } else {
      setMessageTouched(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message || !validateEmail(email)) {
      setErrorMessage('This is required');
      return;
    }

    // Clear error message and reset fields
    setErrorMessage('');
    setName('');
    setEmail('');
    setMessage('');
    setEmailTouched(false);
    setNameTouched(false);
    setMessageTouched(false);

    alert(`Hello ${name}`);
  };

  return (
    <div className="container text-center">
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          placeholder="email"
        />
        {emailTouched && !email && <p className="error-text">Email is required</p>}
        
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="name"
        />
        {nameTouched && !name && <p className="error-text">Name is required</p>}
        
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="message"
        />
        {messageTouched && !message && <p className="error-text">Message is required</p>}
        
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>

/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="John Doe">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput2" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div> */

  );
}