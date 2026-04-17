interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <input 
        className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        {...props}
      />
    </div>
  );
};
