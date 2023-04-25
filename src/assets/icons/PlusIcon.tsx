const PlusIcon = (props: any) => {
  const defaultWidth = 12;
  const defaultHeight = 12;

  const { width: incomingWidth, height: incomingHeight, ...rest } = props;

  const width = incomingWidth ?? defaultWidth;
  const height = incomingHeight ?? defaultHeight;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 6C12 6.375 11.6827 6.69231 11.3077 6.69231H6.69231V11.3077C6.69231 11.6827 6.375 12 6 12C5.625 12 5.30769 11.6827 5.30769 11.3077V6.69231H0.692308C0.317308 6.69231 0 6.375 0 6C0 5.625 0.317308 5.30769 0.692308 5.30769H5.30769V0.692308C5.30769 0.317308 5.625 0 6 0C6.375 0 6.69231 0.317308 6.69231 0.692308V5.30769H11.3077C11.6827 5.30769 12 5.625 12 6Z"
        fill="#1D2136"
      />
    </svg>
  );
};

export default PlusIcon;
