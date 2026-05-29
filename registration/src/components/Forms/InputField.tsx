import "./InputField.css";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  name: string;
  required?: boolean;
  error?: string;
  icons?: React.ElementType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  name,
  required = false,
  error,
  icons: Icon,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <div className="input-container">
        {Icon && (
          <div className="input-icon">
            <Icon />
          </div>
        )}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className="input-field"
        />
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputField;
