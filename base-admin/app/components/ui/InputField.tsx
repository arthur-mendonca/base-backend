export const InputField = ({
  label,
  id,
  readOnly,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
      {label}
    </label>
    <input
      readOnly={readOnly}
      id={id}
      className={`${
        readOnly ? "bg-gray-600" : "bg-gray-50"
      }  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5`}
      {...props}
    />
  </div>
);
