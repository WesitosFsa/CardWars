import { useRouter } from 'next/router';

const ResetButton = () => {
  const router = useRouter();

  const handleReset = () => {
    router.reload(); // Recarga la página
  };

  return (
    <button onClick={handleReset}>
      Empezar de nuevo
    </button>
  );
};

export default ResetButton;
