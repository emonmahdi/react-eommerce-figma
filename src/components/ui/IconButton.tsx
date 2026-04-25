const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-md text-white">
      {children}
    </button>
  );
};

export default IconButton;
