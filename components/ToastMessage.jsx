export default function ToastMessage({ message, color = 'green' }) {
  return (
    <div className={`fixed bottom-5 right-5 p-4 rounded-lg text-white shadow-lg ${color === 'red' ? 'bg-red-500' : 'bg-green-600'}`}>
      {message}
    </div>
  );
}