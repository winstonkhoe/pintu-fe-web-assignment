type ChipProps = {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
};

const Chip = ({ text, isActive, onClick }: ChipProps) => {
  return (
    <button
      className={`rounded-lg px-3 py-1 transition-all border whitespace-nowrap font-semibold cursor-pointer ${
        isActive
          ? 'border-blue-400 bg-blue-400 text-white'
          : 'dark:text-white bg-slate-200 dark:border-white hover:bg-slate-300 dark:hover:bg-white dark:hover:text-black opacity-80 hover:opacity-90 dark:opacity-70 dark:hover:opacity-80'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Chip;