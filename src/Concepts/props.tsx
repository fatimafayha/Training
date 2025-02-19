interface WelcomeProps {
    name: string;
  }
  
  const Welcome: React.FC<WelcomeProps> = ({ name }) => {
    return <h1>Welcome to {name}!</h1>;
  };
  
  export default Welcome;
  