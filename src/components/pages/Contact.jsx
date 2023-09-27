// import { useState } from 'react';
// import { validateEmail } from '../utils/helpers';

// export default function Form() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [emailTouched, setEmailTouched] = useState(false);
//   const [nameTouched, setNameTouched] = useState(false);
//   const [messageTouched, setMessageTouched] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === 'email') {
//       setEmail(inputValue);
//     } else if (inputType === 'name') {
//       setName(inputValue);
//     } else {
//       setMessage(inputValue);
//     }
//   };

//   const handleInputBlur = (e) => {
//     const { target } = e;
//     const inputType = target.name;

//     if (inputType === 'email') {
//       setEmailTouched(true);
//     } else if (inputType === 'name') {
//       setNameTouched(true);
//     } else {
//       setMessageTouched(true);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !name || !message || !validateEmail(email)) {
//       setErrorMessage('This is required');
//       return;
//     }

//     // Clear error message and reset fields
//     setErrorMessage('');
//     setName('');
//     setEmail('');
//     setMessage('');
//     setEmailTouched(false);
//     setNameTouched(false);
//     setMessageTouched(false);

//     alert(`Hello ${name}`);
//   };

//   return (
//     <div className="container text-center">
//       <form action="https://formsubmit.co/rymaxpayne@gmail.com" method="POST" className="form" onSubmit={handleFormSubmit}>
//         <input
//           value={email}
//           name="email"
//           onChange={handleInputChange}
//           onBlur={handleInputBlur}
//           type="email"
//           placeholder="email"
//         />
//         {emailTouched && !email && <p className="error-text">Email is required</p>}
        
//         <input
//           value={name}
//           name="name"
//           onChange={handleInputChange}
//           onBlur={handleInputBlur}
//           type="text"
//           placeholder="name"
//         />
//         {nameTouched && !name && <p className="error-text">Name is required</p>}
        
//         <input
//           value={message}
//           name="message"
//           onChange={handleInputChange}
//           onBlur={handleInputBlur}
//           type="text"
//           placeholder="message"
//         />
//         {messageTouched && !message && <p className="error-text">Message is required</p>}
//         <input 
//           type="hidden" name="_next" value="https://ryanpayneportfolio.netlify.app/#thankyou"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       {errorMessage && (
//         <div>
//           <p className="error-text">{errorMessage}</p>
//         </div>
//       )}
//     </div>

//   );
// }