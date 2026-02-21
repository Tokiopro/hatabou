import { Link } from 'react-router';

const variants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600 px-6 py-4 text-lg',
  secondary: 'bg-emerald-800 text-white hover:bg-emerald-900 px-6 py-4 text-lg',
  line: 'bg-line-green text-white hover:bg-line-green-hover px-6 py-4 text-lg',
  outline: 'border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50 px-4 py-2 text-md',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  icon: Icon,
  type,
}) {
  const baseStyle =
    'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg';
  const classes = `${baseStyle} ${variants[variant]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
