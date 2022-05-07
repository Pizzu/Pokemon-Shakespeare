type MessageProps = {
  error?: Error
}

const ErrorMessage: React.FC<MessageProps> = () => {
  return (
    <div className="max-w-3xl px-8 py-8 inline-block align-bottom backdrop-blur-[80px] bg-red-500 text-white rounded-lg shadow-2xl">
      <h3>OPS! Something went wrong</h3>
      <p>Make sure you spell the pokemon name right</p>
    </div>
  )
}

export default ErrorMessage