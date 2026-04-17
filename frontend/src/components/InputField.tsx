interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputField = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label con tus colores de texto */}
      <label className="text-sm font-semibold text-text-light dark:text-text-dark">
        {label}
      </label>
      
      <input 
        className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 
                   bg-card-light dark:bg-bg-dark 
                   text-text-light dark:text-text-dark
                   outline-none transition-all
                   focus:ring-2 focus:ring-primary dark:focus:ring-gold 
                   focus:border-transparent shadow-sm"
        {...props}
      />
    </div>
  );
};
