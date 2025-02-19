interface NameInputProps {
    onNameChange: (newName: string) => void;
  }
  
  const NameInput: React.FC<NameInputProps> = ({ onNameChange }) => {
    return (
      <input
        type="text"
        onChange={(e) => onNameChange(e.target.value)} 
        placeholder="Enter new name"
      />
    );
  };
  
  export default NameInput;
  