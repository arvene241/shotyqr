const LoadingDots = ({ color = "#000" }: { color?: string }) => {
  return (
    <span className='loading'>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

export default LoadingDots;
