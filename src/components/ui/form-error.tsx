interface FormErrorProps {
    message?: string;
    className?: string;
  }
  
  export const FormError = ({ 
    message, 
    className = "" 
  }: FormErrorProps) => {
    if (!message) return null;
    
    return (
      <p className={`text-xs text-red-500 mt-1 ${className}`}>
        {message}
      </p>
    );
  };