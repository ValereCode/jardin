import { useState } from 'react';
  
function QuestionForm(params) {
  const [inputValue, setInputValue] = useState('Posez votre question ici')
  const isInputError = inputValue.includes('f');
    return(
      <form>
        
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
            if(isInputError) {
              alert('🔥 Vous n\'avez pas le droit d\'utiliser la lettre "f" ici.');
            } else {
              alert({inputValue});
            }   
          }}>
          Enrégistrer 
        </button>
      </form>
    )
}

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default QuestionForm;